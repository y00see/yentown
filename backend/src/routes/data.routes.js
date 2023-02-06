const { authJwt } = require("../middlewares");
const controller = require("../controllers/data.controller");

module.exports = function(app) {
    app.get(
        "/api/data/get",
        [authJwt.verifyToken],
        controller.load
      );
};