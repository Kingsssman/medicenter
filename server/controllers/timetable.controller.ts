const Timetable = require('../models/timetable.model');

module.exports.timetable_create = function (req: any, res: any) {
    let timetable = new Timetable(
        {
            id_rec: req.body.id_rec,
            id_doc: req.body.id_doc,
            schedule_begin: req.body.s_b,
            schedule_end: req.body.s_e,
            schedule_days_runs: req.body.s_r
        }
    );

    timetable.save(function (err: any) {
        if (err) {
            res.send('Timetable Created Error');
            console.log(err);
        } else {
            res.send('Timetable Created successfully');
        }
    });
};

module.exports.timetable_details = function (req: any, res: any) {
    Timetable.find(function (err: any, timetable: any) {
        if (err) {
            res.send('Timetable Read Error');
            console.log(err);
        }
        res.send(timetable);
    });
};

module.exports.timetable_update = function (req: any, res: any) {
    Timetable.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err: any, timetable: any) {
        if (err) {
            res.send('Timetable Update Error');
            console.log(err);
        }
        res.send('timetable udpated.');
    });
};

module.exports.timetable_delete = function (req: any, res: any) {
    Timetable.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            res.send('Timetable Delete Error');
            console.log(err);
        }

        res.send('Deleted successfully!');
    });
};