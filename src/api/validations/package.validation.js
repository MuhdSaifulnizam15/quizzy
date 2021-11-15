
const Joi = require('joi');

const createPackage = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        amount: Joi.string(),
        subject: Joi.string().required(),
        is_active: Joi.boolean(),
        level: Joi.string(),
        description: Joi.string(),
    }),
};

const updatePackage = {
    params: Joi.object().keys({
        packageId: Joi.string().required(),
    })
};

const deletePackage = {
    params: Joi.object().keys({
        packageId: Joi.string().required(),
    })
};

module.exports = {
    createPackage,
    updatePackage,
    deletePackage,
};