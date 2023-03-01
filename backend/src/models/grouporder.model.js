module.exports = (sequelize, Sequelize) => {
    const Grouporder = sequelize.define("grouporders", {
      datetime: {
        type: Sequelize.DATE
      },
      max_weight: {
        type: Sequelize.INTEGER
      },
      max_x: {
        type: Sequelize.INTEGER
      },
      max_y: {
        type: Sequelize.INTEGER
      },
      max_z: {
        type: Sequelize.INTEGER
      },
      intl_shipping_cost: {
        type: Sequelize.INTEGER
      },
      participants: {
        type: Sequelize.INTEGER
      },
      current_weight: {
        type: Sequelize.INTEGER
      }
    })
  
    return Grouporder;
  };