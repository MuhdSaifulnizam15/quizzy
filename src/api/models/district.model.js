const mongoose = require('mongoose');

const districtSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    districtId: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    districtName: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('District', districtSchema);