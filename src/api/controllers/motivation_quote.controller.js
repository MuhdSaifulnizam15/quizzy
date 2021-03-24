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
    const filter = pick(req.query, ['quote', 'author']);
    const options = pick(req.query, ['sortBy', 'populate', 'limit', 'page']);
    const result = await motivationQuoteService.queryMotivationQuotes(filter, options);
    res.send(result);
});

const getMotivationQuote = catchAsync(async (req, res) => {
    const filter = { _id: req.params.motivationQuoteId };
    const options = { };
    const result = await motivationQuoteService.queryMotivationQuotes(filter, options);
    if(result.results.length === 0){
        throw new ApiError(httpStatus.NOT_FOUND, 'Motivation Quote not found');
    }
    res.send(result);
});

const updateMotivationQuote = catchAsync(async (req, res) => {
    const motivationQuote = await motivationQuoteService.updateMotivationQuoteById(req.params.motivationQuoteId, req.body);
    res.send(motivationQuote);
});

const deleteMotivationQuote = catchAsync(async (req, res) => {
    await motivationQuoteService.deleteMotivationQuoteById(req.params.motivationQuoteId);
    res.status(httpStatus.NO_CONTENT).send({ message: 'Motivation Quote successfully deleted' });
});

module.exports = {
    createMotivationQuote,
    getMotivationQuote,
    getMotivationQuotes,
    updateMotivationQuote,
    deleteMotivationQuote,
};