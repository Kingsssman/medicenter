import Service from '../models/service.model';
import fs from 'fs'

module.exports.service_create = function (req: any, res: any) {
    let base64data = req.file.buffer.toString('base64');
    
    let service = new Service(
        {
            title: req.body.title,
            desc: req.body.desc,
            img: {
                contentType: req.file.mimetype,
                buffer: base64data
            }
        }
    );

    service.save(function (err: any) {
        if (err) {
            return res.send('Service Created Error');
            console.log(err);
        } else {
            return res.status(201).json({ service });
        }
    });
};

module.exports.service_details = function (req: any, res: any) {
    Service.find(function (err: any, services: any) {
        if (err) {
            return res.send('Service Read Error');
            console.log(err);
        }
        return res.status(200).json({ services });
    });
};

module.exports.service_update = function (req: any, res: any) {
    Service.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err: any, service: any) {
        if (err) {
            return res.send('Service Update Error');
            console.log(err);
        }
        return res.status(200).json({ service });
    });
};

module.exports.service_delete = function (req: any, res: any) {
    Service.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            return res.send('Service Delete Error');
            console.log(err);
        }
        return res.status(204).send("Service deleted");
    });
};