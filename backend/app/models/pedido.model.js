const sql = require("./db.js");
//Construtor
const PedidoModel = function(Pedido) {
        this.hora = Pedido.hora;
        this.status = Pedido.status;
    }
    //Cria novo Pedido no banco
PedidoModel.create = (Pedido, result) => {
    sql.query("INSERT INTO pedidos SET ?", Pedido, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }
        console.log("Pedido criado: ", { idPedidos: res.insertId, ...Pedido });
        result(null, { idPedidos: res.insertId, ...Pedido });
    })
};
//Seleciona Pedido por ID
PedidoModel.findById = (PedidoId, result) => {
    sql.query("SELECT * FROM pedidos WHERE idpedidos = " + PedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log("Pedido Encontrado", res[0]);
            result(null, res[0]);
        } else {
            result({ kind: "not_found" }, null);
            console.log("Pedido não encontrado");
        }
    })
};
//Seleciona todos os Pedidos
PedidoModel.getAll = result => {
    sql.query("SELECT * FROM pedidos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("Pedidos:", res);
        result(null, res);
    })
}

//Atualizar Pedido por id
PedidoModel.updateById = (PedidoId, Pedido, result) => {
    sql.query("UPDATE pedidos SET hora = ?, status = ? WHERE idpedidos = ?", [Pedido.hora, Pedido.status, PedidoId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Produto atualizado: ", { idPedidos: PedidoId, ...Pedido });
            result(null, { idPedidos: PedidoId, ...Pedido });
        }
    });
}

//Remover Pedido por id
PedidoModel.remove = (PedidoId, result) => {
    sql.query("DELETE FROM pedidos WHERE idpedidos = ?", PedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            result(null, res);
        }
    });
}

//Remover todos os Pedidos
PedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM pedidos ", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err);
        } else {
            result(null);
        }
    });
}

module.exports = PedidoModel;