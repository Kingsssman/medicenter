const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    img: {type: String, required: true}
});

module.exports = mongoose.model('Service', serviceSchema);
export {};
