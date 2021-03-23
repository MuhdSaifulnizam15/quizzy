const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('State', stateSchema);