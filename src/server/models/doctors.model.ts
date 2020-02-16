import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
    name: { type: String, required: true },
    spec: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Object, required: true },
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
                time: {
                    type: String,
                    default: ''
                }
            }
        ]
    }]
});

export default mongoose.model('Doctors', doctorsSchema);