const mongoose = require('mongoose');

const questionAnswerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question_id: {
        type: Number,
        required: true
    },
    question_option_id: {
        type: Number,
        required: true
    },
    answer_time: {
        type: Number,
        required: true
    },
    student_id: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('QuestionAnswer', questionAnswerSchema);