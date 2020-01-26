const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
    name: {type: String, required: true},
    speciality: {type: String, required: true},
    desc: {type: String, required: true}
});

module.exports = mongoose.model('Doctors', doctorsSchema);
export {};
