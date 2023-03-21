module.exports = (sequelize, Sequelize) => {
    const Grouporder = sequelize.define("grouporders", {
      datetime: {
        type: Sequelize.DATE
      },
      members: {
        type: Sequelize.INTEGER
      }
    })
  
    return Grouporder;
  };