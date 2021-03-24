const mongoose = require('mongoose');
const { priority } = require('../../config/constants');
const { toJSON, paginate } = require('./plugins');

const assignmentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    dateline: {
        type: Date
    },
    priority: {
        type: String,
        enum: [ priority.low, priority.medium, priority.high ],
        default: priority.low,
        uppercase: true,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    }
});

assignmentSchema.plugin(toJSON);
assignmentSchema.plugin(paginate);

module.exports = mongoose.model('Assignment', assignmentSchema);