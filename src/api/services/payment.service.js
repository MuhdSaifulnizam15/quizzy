const httpStatus = require('http-status');
const { Payment } = require('../models');
const ApiError = require('../utils/ApiError');

const createPayment = async (userBody) => {
    const payment = await Payment.create(userBody);
    return payment;
};

const queryPayments = async (options) => {
    options.populate = ['student_name', 'received_by'];
    const payments = await Payment.paginate({}, options);
    return payments;
};

const getPaymentById = async (id) => {
    return Payment.findById(id).populate(['user']);
};

const updatePaymentById = async (quizId, updateBody) => {
    const payment = await getPaymentById(quizId);
    if(!payment){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Payment not found');
    }
    Object.assign(payment, updateBody);
    await payment.save();
    return payment;
};

const deletePaymentById = async (quizId) => {
    const payment = await getPaymentById(quizId);
    if(!payment){
        throw new ApiError(httpStatus.NOT_FOUND, 'Payment not found');
    }
    await payment.remove();
    return payment;
};

module.exports = {
    createPayment,
    queryPayments,
    getPaymentById,
    updatePaymentById,
    deletePaymentById,
};