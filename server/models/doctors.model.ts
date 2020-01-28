const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
    doc_name: String,
    speciality: String,
    desc: String,
    img: String,
    work_schedule: {
        day: String,
        slots: [{
            slot1: {
                booked: {
                    type: Boolean,
                    default: 1
                },
                user_tel: String,
                user_name: String
            },
            slot2: {
                booked: {
                    type: Boolean,
                    default: 1
                },
                user_tel: String,
                user_name: String
            }
        }]
    }
});

module.exports = mongoose.model('Doctors', doctorsSchema);
export {};