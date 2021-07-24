const httpStatus = require('http-status');
const { MotivationQuote } = require('../models');
const ApiError = require('../utils/ApiError');

const createMotivationQuote = async (userBody) => {
    if(await MotivationQuote.isQuoteTaken(userBody.quote)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'quote already exist.');
    }
    const motivationQuote = await MotivationQuote.create(userBody);
    return motivationQuote;
};

const queryMotivationQuotes = async (options) => {
    const motivationQuotes = await MotivationQuote.paginate({}, options);
    return motivationQuotes;
};

const getMotivationQuoteById = async (id) => {
    return MotivationQuote.findById(id);
};

const updateMotivationQuoteById = async (motivationQuoteId, updateBody) => {
    const motivationQuote = await getMotivationQuoteById(motivationQuoteId);
    if(!motivationQuote){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Motivation Quote not found');
    }
    Object.assign(motivationQuote, updateBody);
    await motivationQuote.save();
    return motivationQuote;
};

const deleteMotivationQuoteById = async (motivationQuoteId) => {
    const motivationQuote = await getMotivationQuoteById(motivationQuoteId);
    if(!motivationQuote){
        throw new ApiError(httpStatus.NOT_FOUND, 'Motivation Quote not found');
    }
    await motivationQuote.remove();
    return motivationQuote;
};

module.exports = {
    createMotivationQuote,
    queryMotivationQuotes,
    getMotivationQuoteById,
    updateMotivationQuoteById,
    deleteMotivationQuoteById,
};