
const Joi = require('joi');

const createCity = {
    body: Joi.object().keys({
        state_id: Joi.number().required(),
        name: Joi.string().required(),
    }),
};

const updateCity = {
    params: Joi.object().keys({
        stateId: Joi.string().required(),
    })
};

const deleteCity = {
    params: Joi.object().keys({
        stateId: Joi.string().required(),
    })
};

module.exports = {
    createCity,
    updateCity,
    deleteCity,
};