const mongoose = require('mongoose');

const questionOptionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    is_correct: {
        type: Boolean,
        default: false
    },
    question_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('QuestionOption', questionOptionSchema);