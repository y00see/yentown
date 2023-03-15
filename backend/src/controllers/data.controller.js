const db = require("../models");
const User = db.user;
const Order = db.order;
const Gorder = db.grouporder;
const binPacker = require("../3dbinpacking/packer");

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
exports.order = async (req, res) => {
    const userEntry = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    console.log(userEntry);
    Order.create({
      user_id: userEntry.id,
      datetime: req.body.date,
      product_url: req.body.product_url,
      product_weight: req.body.product_weight,
      product_x: req.body.product_x,
      product_y: req.body.product_y,
      product_z: req.body.product_z,
      product_price: req.body.product_price,
      shipping_cost: req.body.shipping_cost
    }).then(order =>{
      res.status(200).send({
        message: "Order created"
      });
    }, error => {
        res.status(500).send({ message: error.message });
    })
  }
    exports.getorders = async (req, res) => {
      const userEntry = await User.findOne({
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
            res.status(200).json({
              orders: orders
            })
              }, error => {
                  res.status(500).send({ message: error.message });
              })
  }
  
  exports.grouporder = async (req, res) => {
    const groupOrderEntries = await Gorder.findAll();
    let groupOrderFound = false;
    const orderEntry = await Order.findOne({
      where: {
        id: req.body.order_id
      }
    });

    for (let i = 0; i < groupOrderEntries.length; i++) {
        const groupOrder = groupOrderEntries[i];
    
        // Check if the order fits into the group order using 3D bin packing
        const currentOrders = await Order.findAll({
          where: {
            grouporder_id : groupOrder.id
          }
        });

        const doesFit = binPacker.binPacker(currentOrders, orderEntry);
    
        if (doesFit) {
          // Update the order with the group order ID
          Order.update({
            grouporder_id: groupOrder.id
          }, {
            where: {id: orderEntry.id}
          })         
          groupOrderFound = true;
          break;
        }
    }
    
    if (!groupOrderFound) {
        Gorder.create({
          datetime: new Date()
        }).then(grouporder => {
          Order.update({
            grouporder_id: grouporder.id
          }, {
            where: {id: orderEntry.id}
          })
        })
    }
    
    };
