const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cityId: {
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    cityName: {
        type: String,
        required: true
    },
    postCode: {
        type: Number,
        required: true,
        index: true
    }
});

module.exports = mongoose.model('City', citySchema);