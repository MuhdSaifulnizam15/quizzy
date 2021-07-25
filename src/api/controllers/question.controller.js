const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { questionService } = require('../services');
const { questionTypes } = require('../../config/constants');

const createQuestion = catchAsync(async (req, res) => {
    const question = await questionService.createQuestion(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', question });
});

const getQuestions = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await questionService.queryQuestions(options);
    res.send({ status: true, code: '0000', result });
});

const getQuestion = catchAsync(async (req, res) => {
    const question = await questionService.getQuestionById(req.params.questionId);
    if (!question) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    res.send({ status: true, code: '0000', question });
});

const getQuestionByQuiz = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const question = await questionService.getQuestionByQuiz(req.params.quizId, options);
    if(!question){
        throw new ApiError(httpStatus.NOT_FOUND, 'No question found');
    }
    res.send({ status: true, code: '0000', question });
});

const getQuestionByType = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    if(!questionTypes[req.params.type]){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid question type, allowed question type: [mcq,fillInTheBlank,trueFalse]');
    }
    const type = questionTypes[req.params.type];
    const question = await questionService.getQuestionByType(type, options);
    if(!question){
        throw new ApiError(httpStatus.NOT_FOUND, 'No question found');
    }
    res.send({ status: true, code: '0000', question });
});

const updateQuestion = catchAsync(async (req, res) => {
    const question = await questionService.updateQuestionById(req.params.questionId, req.body);
    res.send({ status: true, code: '0000', question });
});

const deleteQuestion = catchAsync(async (req, res) => {
    await questionService.deleteQuestionById(req.params.questionId);
    res.send({ status: true, code: '0000',  message: 'Question successfully deleted' });
});

module.exports = {
    createQuestion,
    getQuestion,
    getQuestions,
    getQuestionByQuiz,
    getQuestionByType,
    updateQuestion,
    deleteQuestion,
};