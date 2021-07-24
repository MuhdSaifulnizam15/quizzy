const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { motivationQuoteService } = require('../services');

const createMotivationQuote = catchAsync(async (req, res) => {
    const motivationQuote = await motivationQuoteService.createMotivationQuote(req.body);
    res.status(httpStatus.CREATED).send(motivationQuote);
});

const getMotivationQuotes = catchAsync(async (req, res) => {
    const options = pick(req.query, ['sort', 'limit', 'page']);
    const result = await motivationQuoteService.queryMotivationQuotes(options);
    res.send({ status: true, code: '0000', result });
});

const getMotivationQuote = catchAsync(async (req, res) => {
    const motivationQuote = await motivationQuoteService.getMotivationQuoteById(req.params.motivationQuoteId);
    if(!motivationQuote){
        throw new ApiError(httpStatus.NOT_FOUND, 'Motivation Quote not found');
    }
    res.send({ status: true, code: '0000', motivationQuote });
});

const updateMotivationQuote = catchAsync(async (req, res) => {
    const motivationQuote = await motivationQuoteService.updateMotivationQuoteById(req.params.motivationQuoteId, req.body);
    res.send(motivationQuote);
});

const deleteMotivationQuote = catchAsync(async (req, res) => {
    await motivationQuoteService.deleteMotivationQuoteById(req.params.motivationQuoteId);
    res.send({ message: 'Motivation Quote successfully deleted' });
});

module.exports = {
    createMotivationQuote,
    getMotivationQuote,
    getMotivationQuotes,
    updateMotivationQuote,
    deleteMotivationQuote,
};