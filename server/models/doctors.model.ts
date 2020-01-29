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
                    type: Boolean,
                    default: false
                },
                user_tel: String,
                user_name: String,
                tel: String
            }
        ]
    }]
});

export default mongoose.model('Doctors', doctorsSchema);