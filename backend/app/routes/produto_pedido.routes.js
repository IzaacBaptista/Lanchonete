module.exports = app => {
    const produtoPedidoController =  require("../controllers/produto_pedido.controller.js");

    app.post("/produtos_pedidos", produtoPedidoController.create);

    app.get("/produtos_pedidos", produtoPedidoController.findAll);
    app.get("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.findById);
    app.get("/produtos_pedidos/pedidos/:pedidoId", produtoPedidoController.findByPedido);    
    app.get("/produtos_pedidos/produtos/:produtoId", produtoPedidoController.findByProduto);        
    
    
    app.put("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.update);
    
    app.delete("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.delete);
    app.delete("/produtos_pedidos/produto/:produtoId", produtoPedidoController.deleteByProduto);
    app.delete("/produtos_pedidos/pedido/:pedidoId", produtoPedidoController.deleteByPedido);
    app.delete("/produtos_pedidos/", produtoPedidoController.deleteAll);
}
