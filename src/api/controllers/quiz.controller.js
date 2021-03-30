const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { quizService } = require('../services');

const createQuiz = catchAsync(async (req, res) => {
    const quiz = await quizService.createQuiz(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', quiz });
});

const getQuizzes = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'is_active', 'subject']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    options.populate = 'subject';
    const result = await quizService.queryQuizzes(filter, options);
    res.send({ status: true, code: '0000', result });
});

const getQuiz = catchAsync(async (req, res) => {
    const filter = { _id: req.params.quizId };
    const result = await quizService.queryQuizzes(filter, options);
    if(result.results.length === 0){
        throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
    }
    res.send({ status: true, code: '0000', result });
});

const updateQuiz = catchAsync(async (req, res) => {
    const quiz = await quizService.updateQuizById(req.params.quizId, req.body);
    res.send({ status: true, code: '0000', quiz });
});

const deleteQuiz = catchAsync(async (req, res) => {
    await quizService.deleteQuizById(req.params.quizId);
    res.send({ status: true, code: '0000', message: 'Quiz successfully deleted' });
});

module.exports = {
    createQuiz,
    getQuiz,
    getQuizzes,
    updateQuiz,
    deleteQuiz,
};