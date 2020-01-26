const User = require('../models/user.model');

module.exports.user_create = function (req:any, res:any) {
    let user = new User(
        {
            name: req.body.name
        }
    );

    user.save(function (err: any) {
        if (err) {
            res.send('User Created Error')
            console.log(err)
        } else {
            res.send('User Created successfully')
        }
    })
};