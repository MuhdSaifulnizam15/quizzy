const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { toJSON } = require('./plugins');

const quizSchema = mongoose.Schema({
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
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }
},{
    timestamps: true,
});

quizSchema.plugin(toJSON);
quizSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Quiz', quizSchema);