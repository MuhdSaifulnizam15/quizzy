
const Joi = require('joi');

const createQuestion = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string(),
        is_true: Joi.boolean(),
        type: Joi.string(),
        quiz: Joi.string().required(),
        duration: Joi.number(),
        option: Joi.array().items(Joi.object({
            title: Joi.string().required(),
            description: Joi.string(),
            is_correct: Joi.boolean(),
        })),
        answer: Joi.string(),
        pass_min_score: Joi.number(),
    }),
};

const getQuestionType = {
    params: Joi.object().keys({
        type: Joi.string().required(),
    })
}

const updateQuestion = {
    params: Joi.object().keys({
        questionId: Joi.string().required(),
    })
};

const deleteQuestion = {
    params: Joi.object().keys({
        questionId: Joi.string().required(),
    })
};

module.exports = {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionType,
};