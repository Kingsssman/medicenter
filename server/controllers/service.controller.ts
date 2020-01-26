const Service = require('../models/service.model');

module.exports.service_create = function (req: any, res: any) {
    let service = new Service(
        {
            name: req.body.name,
            desc: req.body.desc
        }
    );

    service.save(function (err: any) {
        if (err) {
            res.send('Service Created Error');
            console.log(err);
        } else {
            res.send('Service Created successfully');
        }
    });
};

module.exports.service_details = function (req: any, res: any) {
    Service.findById(req.params.id, function (err: any, service: any) {
        if (err) {
            res.send('Service Read Error');
            console.log(err);
        }
        res.send(service);
    });
};

module.exports.service_update = function (req: any, res: any) {
    Service.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err: any, service: any) {
        if (err) {
            res.send('Service Update Error');
            console.log(err);
        }
        res.send('service udpated.');
    });
};

module.exports.service_delete = function (req: any, res: any) {
    Service.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            res.send('Service Delete Error');
            console.log(err);
        }

        res.send('Deleted successfully!');
    });
};