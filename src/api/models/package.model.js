const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { toJSON } = require('./plugins');

const packageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    level: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
}, {
    timestamps: true,
});

packageSchema.plugin(toJSON);
packageSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Package', packageSchema);