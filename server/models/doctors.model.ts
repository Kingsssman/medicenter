import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
    doc_name: String,
    speciality: String,
    desc: String,
    img: String,
    work_schedule: [{
        day: String,
        slots: [
            {
                booked: {
                    type: String,
                    default: false
                },
                user_tel: {
                    type: String,
                    default: ' '
                },
                user_name: {
                    type: String,
                    default: ' '
                },
                time: {type: String}
            }
        ]
    }]
});

export default mongoose.model('Doctors', doctorsSchema);