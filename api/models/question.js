const mongoose = require('mongoose');

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
        type: Number,
        required: true
    },
    quiz_id: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Question', questionSchema);