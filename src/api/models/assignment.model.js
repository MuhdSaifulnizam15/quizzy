const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    dateline: {
        type: Date
    },
    priority: {
        type: Number,
        required: true
    },
    subject_id: {
        type: Number,
        required: true
    },
    quiz_id: {
        type: Number,
        required: true
    },
    classroom_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Assignment', assignmentSchema);