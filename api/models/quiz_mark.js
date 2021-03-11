const mongoose = require('mongoose');

const quizMarkSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quz_id: {
        type: Number,
        required: true
    },
    mark: {
        type: Number,
        required: true
    },
    student_id: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('QuizMark', quizMarkSchema);