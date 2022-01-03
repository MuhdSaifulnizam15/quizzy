const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { toJSON } = require('./plugins');

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
});

citySchema.plugin(toJSON);
citySchema.plugin(mongoosePaginate);

citySchema.statics.isNameTaken = async function (name, excludeCityId) {
    const city = await this.findOne({ name, _id: { $ne: excludeCityId }});
    return !!city;
};

module.exports = mongoose.model('City', citySchema);