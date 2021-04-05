
const Joi = require('joi');

const createAssignment = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        dateline: Joi.date(),
        priority: Joi.string(),
        subject: Joi.string().required(),
        quiz: Joi.string().required(),
        classroom: Joi.string().required(),
    }),
};

const updateAssignment = {
    params: Joi.object().keys({
        assignmentId: Joi.string().required(),
    })
};

const deleteAssignment = {
    params: Joi.object().keys({
        assignmentId: Joi.string().required(),
    })
};

module.exports = {
    createAssignment,
    updateAssignment,
    deleteAssignment,
};