const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timetableSchema = new Schema({
    id_rec: {type: String, required: true},
    id_doc: {type: String, required: true},
    schedule_begin: {type: String, required: true},
    schedule_end: {type: String, required: true},
    schedule_days_runs: {type: Array, required: true}
});

module.exports = mongoose.model('Timetable', timetableSchema);
export {};
