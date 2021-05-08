const httpStatus = require('http-status');
const { Question } = require('../models');
const ApiError = require('../utils/ApiError');

const createQuestion = async (userBody) => {
    const question = await Question.create(userBody);
    return question;
};

const queryQuestions = async (filter, options) => {
    const questions = await Question.paginate(filter, options);
    return questions;
};

const getQuestionById = async (id) => {
    return Question.findById(id).populate(['quiz, option']);
}

const getQuestionByQuiz = async (id) => {
    return Question.find({ quiz: id }).populate(['quiz, option']);
}

const getQuestionByType = async (type, filter, options) => {
    const questions = Question.find({ type: type }).populate(['quiz, option']);
    return questions.paginate(filter, options);
}

const updateQuestionById = async (questionId, updateBody) => {
    const question = await getQuestionById(questionId);
    if(!question){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Question not found');
    }
    Object.assign(question, updateBody);
    await question.save();
    return question;
};

const deleteQuestionById = async (questionId) => {
    const question = await getQuestionById(questionId);
    if(!question){
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    await question.remove();
    return question;
};

module.exports = {
    createQuestion,
    queryQuestions,
    getQuestionById,
    getQuestionByQuiz,
    getQuestionByType,
    updateQuestionById,
    deleteQuestionById,
};