const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
}, {
    timestamps: true,
});

subjectSchema.plugin(toJSON);
subjectSchema.plugin(paginate);

module.exports = mongoose.model('Subject', subjectSchema);