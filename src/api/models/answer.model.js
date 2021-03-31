const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const answerSchema = mongoose.Schema(
    {
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true,
        },
        answer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option',
            required: true,
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        answer_time: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
answerSchema.plugin(toJSON);

module.exports = mongoose.model('Answer', answerSchema);