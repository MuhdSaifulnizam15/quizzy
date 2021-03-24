
const Joi = require('joi');

const createQuiz = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string(),
        is_active: Joi.boolean(),
        subject: Joi.string().required(),
    }),
};

const updateQuiz = {
    params: Joi.object().keys({
        quizId: Joi.string().required(),
    })
};

const deleteQuiz = {
    params: Joi.object().keys({
        quizId: Joi.string().required(),
    })
};

module.exports = {
    createQuiz,
    updateQuiz,
    deleteQuiz,
};