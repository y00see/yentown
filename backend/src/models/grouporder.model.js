module.exports = (sequelize, Sequelize) => {
    const Grouporder = sequelize.define("grouporders", {
      datetime: {
        type: Sequelize.DATE
      }
    })
  
    return Grouporder;
  };