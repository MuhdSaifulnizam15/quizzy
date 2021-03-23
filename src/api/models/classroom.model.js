const mongoose = require('mongoose');

const classroomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject_id: {
        type: Number,
        required: true
    },
    tutor_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Classroom', classroomSchema);