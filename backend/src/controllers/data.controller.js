const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Order = db.order;

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

exports.update = (req, res) => {
    const value = req.body.value;
    const username = req.body.username;
    const name = req.body.name;
    console.log(value, username, name);
    User.update({
      [name]: value
    }, {
      where: {username: username}
    })
  } 
exports.order = (req, res) => {
    const userEntry = User.findOne({
      where: {
        username: req.body.username
      }
    });
    Order.create({
      user_id: userEntry.id,
      datetime: req.body.date,
      product_url: req.body.product_url,
      product_weight: req.body.product_weight,
      product_x: req.body.product_x,
      product_y: req.body.product_y,
      product_z: req.body.product_z,
      product_price: req.body.product_price,
      shipping_cost: req-body.shipping_cost
    })
  }
    exports.getorders = (req, res) => {
      const userEntry = User.findOne({
        where: {
          username: req.body.username
        }
      });
      console.log(userEntry);
      Order.findAll({
          where: {
            user_id: userEntry.id
          }
        })
          .then(orders => {
            console.log(orders)
             /* res.status(200).send({
                  datetime: order.datetime,
                  product_url: order.product_url,
                  product_price: order.product_price,
                  shipping_cost: order.shipping_cost,
                  id: order.id
                });*/
              }, error => {
                  res.status(500).send({ message: error.message });
              })
  }
