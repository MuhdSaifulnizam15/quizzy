
const Joi = require('joi');

const createPayment = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        amount: Joi.string(),
        status: Joi.string(),
        description: Joi.string(),
        payer: Joi.string(),
        student_name: Joi.array(),
        received_by: Joi.string().required(),
        date_received: Joi.string(),
        attachment: Joi.string(),
        payment_method: Joi.string(),
        receipt_no: Joi.string(),
    }),
};

const updatePayment = {
    params: Joi.object().keys({
        paymentId: Joi.string().required(),
    })
};

const deletePayment = {
    params: Joi.object().keys({
        paymentId: Joi.string().required(),
    })
};

module.exports = {
    createPayment,
    updatePayment,
    deletePayment,
};