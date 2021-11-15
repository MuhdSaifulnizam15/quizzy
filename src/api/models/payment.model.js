const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { toJSON } = require('./plugins');
const { paymentStatus, paymentMethod } = require('../../config/constants');
const { userSchema } = require('./user.model');

const paymentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        default: "000"
    },
    status: {
        type: String,
        enum: paymentStatus,
        default: paymentStatus.pending,
        uppercase: true,
    },
    description: {
        type: String
    },
    payer: {
        type: String
    },
    student_name: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    received_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date_received: {
        type: String,
    },
    attachment: {
        type: String
    },
    payment_method: {
        type: String,
        enum: paymentMethod,
        default: paymentMethod.cash,
        uppercase: true,
    },
    receipt_no: {
        type: String
    },
}, {
    timestamps: true,
});

paymentSchema.plugin(toJSON);
paymentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Payment', paymentSchema);