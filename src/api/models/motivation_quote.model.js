const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const motivationQuoteSchema = mongoose.Schema({
    quote: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        default: 'Unknown',
        capitalize: true,
    }
});

motivationQuoteSchema.plugin(toJSON);
motivationQuoteSchema.plugin(paginate);

motivationQuoteSchema.statics.isQuoteTaken = async function (quote, excludeMotivationQuoteId) {
    const motivationQuote = await this.findOne({ quote, _id: { $ne: excludeMotivationQuoteId } });
    return !!motivationQuote;
};

module.exports = mongoose.model('MotivationQuote', motivationQuoteSchema);