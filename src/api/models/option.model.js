const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const optionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        is_correct: {
            type: Boolean,
            default: false
        },
    }
);

module.exports = {
    optionSchema
};