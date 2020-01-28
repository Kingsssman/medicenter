const Booking = require('../models/booking.model');

module.exports.booking_create = function (req: any, res: any) {
    let booking = new Booking(
        {
            name: req.body.name,
            id_doc: req.body.id_doc,
            day: req.body.day,
            time: req.body.time,
            phone: req.body.phone
        }
    );

    booking.save(function (err: any) {
        if (err) {
            res.send('Booking Created Error');
            console.log(err);
        } else {
            res.send('Booking Created successfully');
        }
    });
};

module.exports.booking_details = function (req: any, res: any) {
    Booking.find(function (err: any, booking: any) {
        if (err) {
            res.send('Booking Read Error');
            console.log(err);
        }
        res.send(booking);
    });
};

module.exports.booking_update = function (req: any, res: any) {
    Booking.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err: any, booking: any) {
        if (err) {
            res.send('Booking Update Error');
            console.log(err);
        }
        res.send('booking udpated.');
    });
};

module.exports.booking_delete = function (req: any, res: any) {
    Booking.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            res.send('Booking Delete Error');
            console.log(err);
        }

        res.send('Deleted successfully!');
    });
};