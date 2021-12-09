const sql = require("./db.js");

const ProdutoPedido = function(produtoPedido){
    this.produtos_idprodutos = produtoPedido.produtos_idprodutos;
    this.pedidos_idpedidos = produtoPedido.pedidos_idpedidos;
    this.observacao = produtoPedido.observacao;
}

ProdutoPedido.create = (produtoPedido, result) => {
    sql.query("INSERT INTO produtos_pedidos SET ?", produtoPedido, (err, res) => {
        console.log(res);
        result(null, { idprodutospedidos: res.insertId, ...produtoPedido});
    });
}

ProdutoPedido.getAll = (result) => {
    sql.query(`
        SELECT * from produtos_pedidos
        INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos
        INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos    
    `, (err, res) => {
        result(null, res);
    })
}

ProdutoPedido.getById = (produtoPedidoId, result) => {
    sql.query(`
        SELECT * from produtos_pedidos
        INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos
        INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos    
        WHERE produtos_pedidos.idprodutos_pedidos = ${produtoPedidoId}
    `, (err, res) => {
        result(null, res);
    })
}

ProdutoPedido.getByPedido = (pedidoId, result) => {
    sql.query(`
        SELECT * from produtos_pedidos 
        INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos
        INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos    
        WHERE produtos_pedidos.pedidos_idpedidos = ${pedidoId}
    `, (err, res) => {
        console.log(err);
        result(null, res);
    })
}

ProdutoPedido.getByProduto = (produtoId, result) => {
    sql.query(`
        SELECT * from produtos_pedidos
        INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos
        INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos    
        WHERE produtos_pedidos.produtos_idprodutos = ${produtoId}
    `, (err, res) => {
        result(null, res);
    })
}

ProdutoPedido.updateById = (produtoPedidoId, produtoPedido, result) => {
    sql.query(`UPDATE produtos_pedidos SET pedidos_idpedidos = ?, produtos_idprodutos = ?, observacao = ? 
              WHERE idprodutos_pedidos = ?`, [produtoPedido.pedidos_idpedidos, produtoPedido.produtos_idprodutos, 
              produtoPedido.observacao, produtoPedidoId], (err, res) => {
        if (err){
            console.log("erro: ", err);
            result(null, err);
        } else if (res.affectRows == 0) {
            console.log(res);
            result({kind:"not_found"}, null);
        } else {
            console.log(res);
            result(null, {idprodutos_pedidos: produtoPedidoId, ...produtoPedido});       
        }
    });
}

ProdutoPedido.remove = (produtoPedidoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE idprodutos_pedidos = ?", produtoPedidoId, (err, res) =>{
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
        } else if (res.affectRows == 0){
            result({kind: "not_found"});
        } else {
            result(null, res);
        }
    })
}

ProdutoPedido.removeByPedido = (pedidoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE pedidos_idpedidos = ?", pedidoId, (err, res) =>{
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
        } else if (res.affectRows == 0){
            result({kind: "not_found"});
        } else {
            result(null, res);
        }
    })
}

ProdutoPedido.removeByProduto = (produtoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE produtos_idprodutos = ?", produtoId, (err, res) =>{
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
        } else if (res.affectRows == 0){
            result({kind: "not_found"});
        } else {
            result(null, res);
        }
    })
}

module.exports = ProdutoPedido;