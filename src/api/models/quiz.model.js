const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: false
    },
    subject_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Quiz', quizSchema);