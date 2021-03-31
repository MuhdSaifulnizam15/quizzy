const mongoose = require('mongoose');
const { questionTypes } = require('../../config/constants');

const questionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    is_true: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: questionTypes,
        default: 'mcq'
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    duration: {
        type: Number,
        default: 10
    },
    option: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option',
            required: true
        }
    ],
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option',
        required: true
    },
    pass_min_score: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Question', questionSchema);