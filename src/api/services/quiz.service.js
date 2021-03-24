const httpStatus = require('http-status');
const { Quiz } = require('../models');
const ApiError = require('../utils/ApiError');

const createQuiz = async (userBody) => {
    const quiz = await Quiz.create(userBody);
    return quiz;
};

const queryQuizzes = async (filter, options) => {
    const quizs = await Quiz.paginate(filter, options);
    return quizs;
};

const getQuizById = async (id) => {
    return Quiz.findById(id);
};

const updateQuizById = async (quizId, updateBody) => {
    const quiz = await getQuizById(quizId);
    if(!quiz){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Quiz not found');
    }
    Object.assign(quiz, updateBody);
    await quiz.save();
    return quiz;
};

const deleteQuizById = async (quizId) => {
    const quiz = await getQuizById(quizId);
    if(!quiz){
        throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
    }
    await quiz.remove();
    return quiz;
};

module.exports = {
    createQuiz,
    queryQuizzes,
    getQuizById,
    updateQuizById,
    deleteQuizById,
};