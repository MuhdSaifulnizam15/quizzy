const mongoose = require('mongoose');

const motivationQuoteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MotivationQuote', motivationQuoteSchema);