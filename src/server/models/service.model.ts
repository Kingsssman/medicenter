import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    img: {type: Object, required: true}
});

export default mongoose.model('Service', serviceSchema);