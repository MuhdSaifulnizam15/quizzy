const Joi = require('joi');

const createMotivationQuote = {
    body: Joi.object().keys({
        quote: Joi.string().required(),
        author: Joi.string(),
    }),
};

const updateMotivationQuote = {
    params: Joi.object().keys({
        motivationQuoteId: Joi.string().required(),
    })
};

const deleteMotivationQuote = {
    params: Joi.object().keys({
        motivationQuoteId: Joi.string().required(),
    })
};

module.exports = {
    createMotivationQuote,
    updateMotivationQuote,
    deleteMotivationQuote,
};