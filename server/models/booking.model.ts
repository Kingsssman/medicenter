const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: {type: String, required: true},
    id_doc: {type: String, required: true},
    day: {type: String, required: true},
    time: {type: String, required: true},
    phone: {type: String, required: true}
});

module.exports = mongoose.model('Booking', bookingSchema);
export {};