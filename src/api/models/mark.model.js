const mongoose = require('mongoose');
const { grade } = require('../../config/constants');
const { toJSON } = require('./plugins');

const markSchema = mongoose.Schema(
    {
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz',
            required: true,
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        mark: {
            type: Number,
            required: true
        },
        grade: {
            type: String,
            enum: grade,
            default: 'PASS',
        },
        comment: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
markSchema.plugin(toJSON);

module.exports = mongoose.model('Mark', markSchema);