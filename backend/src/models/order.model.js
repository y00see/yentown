module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      datetime: {
        type: Sequelize.DATE
      },
      product_url: {
        type: Sequelize.STRING
      },
      product_weight: {
        type: Sequelize.INTEGER
      },
      product_x: {
        type: Sequelize.INTEGER
      },
      product_y: {
        type: Sequelize.INTEGER
      },
      product_z: {
        type: Sequelize.INTEGER
      },
      product_price: {
        type: Sequelize.INTEGER
      },
      shipping_cost: {
        type: Sequelize.INTEGER
      },
      grouporder_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'grouporders',
          key: 'id'
        }
      },
      ready: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
  
    return Order;
  };