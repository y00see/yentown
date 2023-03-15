const { authJwt } = require("../middlewares");
const controller = require("../controllers/data.controller");

module.exports = function(app) {
    app.post(
        "/api/data/get",
        [authJwt.verifyToken],
        controller.load
    );
    app.post(
        "/api/data/update",
        [authJwt.verifyToken],
        controller.update
    );
    app.post(
        "/api/data/order",
        [authJwt.verifyToken],
        controller.order
    );
    app.post(
      "/api/data/getorders",
      [authJwt.verifyToken],
      controller.getorders
    );
    app.post(
      "/api/data/grouporder",
      [authJwt.verifyToken],
      controller.grouporder
    );
};