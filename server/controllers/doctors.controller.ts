const Doctors = require('../models/doctors.model');

module.exports.doctors_create = function (req: any, res: any) {
    let doctors = new Doctors(
        {
            name: req.body.name,
            speciality: req.body.spec,
            desc: req.body.desc
        }
    );

    doctors.save(function (err: any) {
        if (err) {
            res.send('Doctors Created Error');
            console.log(err);
        } else {
            res.send('Doctors Created successfully');
        }
    });
};

module.exports.doctors_details = function (req: any, res: any) {
    Doctors.findById(req.params.id, function (err: any, doctors: any) {
        if (err) {
            res.send('Doctors Read Error');
            console.log(err);
        }
        res.send(doctors);
    });
};

module.exports.doctors_update = function (req: any, res: any) {
    Doctors.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err: any, doctors: any) {
        if (err) {
            res.send('Doctors Update Error');
            console.log(err);
        }
        res.send('doctors udpated.');
    });
};

module.exports.doctors_delete = function (req: any, res: any) {
    Doctors.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            res.send('Doctors Delete Error');
            console.log(err);
        }

        res.send('Deleted successfully!');
    });
};