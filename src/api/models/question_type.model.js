const mongoose = require('mongoose');

const questionTypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('QuestionType', questionTypeSchema);