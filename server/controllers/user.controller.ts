const User = require('../models/user.model');

module.exports.user_create = function (req: any, res: any) {
    let user = new User(
        {
            name: req.body.name
        }
    );

    user.save(function (err: any) {
        if (err) {
            res.send('User Created Error');
            console.log(err);
        } else {
            res.send('User Created successfully');
        }
    });
};

module.exports.user_details = function (req: any, res: any) {
    User.findById(req.params.id, function (err: any, user: any) {
        if (err) {
            res.send('User Read Error');
            console.log(err);
        }
        res.send(user);
    });
};

module.exports.user_update = function (req: any, res: any) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err: any, user: any) {
        if (err) {
            res.send('User Update Error');
            console.log(err);
        }
        res.send('user udpated.');
    });
};

module.exports.user_delete = function (req: any, res: any) {
    User.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            res.send('User Delete Error');
            console.log(err);
        }

        res.send('Deleted successfully!');
    });
};