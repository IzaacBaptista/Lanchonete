module.exports = app => {
    const pedidoController = require("../controllers/pedido.controller.js");

    app.post("/pedidos", pedidoController.create);
    app.get("/pedidos", pedidoController.findAll);
    app.get("/pedidos/:pedidoId", pedidoController.findById);
    app.put("/pedidos/:pedidoId", pedidoController.update);
    app.delete("/pedidos/:pedidoId", pedidoController.delete);
    app.delete("/pedidos", pedidoController.deleteAll);
}