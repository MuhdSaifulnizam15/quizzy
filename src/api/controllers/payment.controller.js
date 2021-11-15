const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { paymentService } = require('../services');

const createPayment = catchAsync(async (req, res) => {
    const payment = await paymentService.createPayment(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', payment });
});

const getPayments = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await paymentService.queryPayments(options);
    res.send({ status: true, code: '0000', result });
});

const getPayment = catchAsync(async (req, res) => {
    const payment = await paymentService.getPaymentById(req.params.paymentId);
    if(!payment){
        throw new ApiError(httpStatus.NOT_FOUND, 'Payment not found');
    }
    res.send({ status: true, code: '0000', payment });
});

const updatePayment = catchAsync(async (req, res) => {
    const payment = await paymentService.updatePaymentById(req.params.paymentId, req.body);
    res.send({ status: true, code: '0000', payment });
});

const deletePayment = catchAsync(async (req, res) => {
    await paymentService.deletePaymentById(req.params.paymentId);
    res.send({ status: true, code: '0000', message: 'Payment successfully deleted' });
});

module.exports = {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment,
};