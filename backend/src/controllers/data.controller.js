const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

exports.load = (req, res) => {
    User.findOne({
        where: {
          username: req.body.username
        }
      })
        .then(user => {
            res.status(200).send({
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                country: user.country,
                city: user.city,
                address: user.address,
                zip_code: user.zip_code
              });
            }, error => {
                res.status(500).send({ message: error.message });
            })
}