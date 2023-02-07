const { authJwt } = require("../middlewares");
const controller = require("../controllers/data.controller");

module.exports = function(app) {
    app.post(
        "/api/data/get",
        [authJwt.verifyToken],
        controller.load
      );
};