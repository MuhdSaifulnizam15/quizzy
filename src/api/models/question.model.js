const mongoose = require('mongoose');
const { questionTypes } = require('../../config/constants');
const { toJSON } = require('./plugins');
const { optionSchema } = require('./option.model');
const mongoosePaginate = require('mongoose-paginate-v2');

const questionSchema = mongoose.Schema({
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
    option: {
        type: [optionSchema]
    },
    answer: {
        type: String,
    },
    pass_min_score: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true,
});

questionSchema.plugin(toJSON);
questionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Question', questionSchema);