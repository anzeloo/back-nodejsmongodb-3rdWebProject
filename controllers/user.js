const User = require('../src/models/user');

exports.index = function(req, res, next) {
    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.send(users);
        }
    })
}

//schema user
exports.create = function(req, res, next) {
    let user = new User({
        name: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        },
        username: {
            type: req.body.typeUN
        },
        identification: {
            type: req.body.typeID,
            number: req.body.number
        },
        password: req.body.password,
        photo: req.body.photo,
        active: req.body.active
    });
    user.save(err => {
        if (err) {
            return next(err);
        } else {
            res.send("User created successfully");
        }
    })
}

exports.show = function (req, res, next) {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.send(user);
        }
    })
}

exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.send("User deleted successfully");
        }
    })
}

exports.update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.send("User updated successfully");
        }
    })
}