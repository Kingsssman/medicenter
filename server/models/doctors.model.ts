const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
    // id_doc: {type:String, required: true},
    name: {type: String, required: true},
    speciality: {type: String, required: true},
    desc: {type: String, required: true}
});

module.exports = mongoose.model('Doctors', doctorsSchema);
export {};
