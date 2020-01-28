const Doctors = require('../models/doctors.model');

module.exports.doctors_create = function (req: any, res: any) {
    let doctors = new Doctors(
        {
            doc_name: req.body.doc_name,
            speciality: req.body.spec,
            desc: req.body.desc,
            img: req.body.img,
            work_schedule: {
                day: req.body.day,
                slots: [{
                    slot1: {
                        booked: req.body.booked,
                        user_tel: req.body.user_tel,
                        user_name: req.body.user_name
                    },
                    slot2: {
                        booked: req.body.booked,
                        user_tel: req.body.user_tel,
                        user_name: req.body.user_name
                    }
                }]
            }
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
    Doctors.find(function (err: any, doctors: any) {
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