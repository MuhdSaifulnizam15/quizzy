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
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
optionSchema.plugin(toJSON);

module.exports = mongoose.model('Option', optionSchema);