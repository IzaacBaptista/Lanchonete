const produtoPedidoModel = require("../models/produto_pedido.model.js");

exports.create = (req, res) => {
    const produtoPedido = new produtoPedidoModel({
        produtos_idprodutos: req.body.produtos_idprodutos,
        pedidos_idpedidos: req.body.pedidos_idpedidos,
        observacao: req.body.observacao
    });

    produtoPedidoModel.create(produtoPedido, (err, data) => {
        res.send(data);
    })
}

exports.findAll = (req, res) => {
    produtoPedidoModel.getAll((err,data) => {
        res.send(data); 
     });
}

exports.findById = (req, res) => {
    produtoPedidoModel.getById(req.params.produtoPedidoId, (err, data) => {
        res.send(data);       
    });
}

exports.findByPedido = (req, res) => {
    produtoPedidoModel.getByPedido(req.params.pedidoId, (err, data) => {
        res.send(data);       
    });
}

exports.findByProduto = (req, res) => {
    produtoPedidoModel.getByProduto(req.params.produtoId, (err, data) => {
        res.send(data);       
    });
}

exports.update = (req, res) => {
    const produtoPedido = new produtoPedidoModel({
        pedidos_idpedidos: req.body.pedidos_idpedidos,
        produtos_idprodutos: req.body.produtos_idprodutos,
        observacao: req.body.observacao
    });

    produtoPedidoModel.updateById(req.params.produtoPedidoId, produtoPedido, (req, data) => {
        res.send(data);
    })
}

exports.delete = (req, res) => {
    produtoPedidoModel.remove(req.params.produtoPedidoId, (err, data) => {
        if (err) {
            if (err.kind == "not_found"){
                res.status(404).send({ message: "ProdutoPedido não encontrado."});
            } else {
                res.status(500).send({ message: "Erro ao deletar registro"});
            } 
        } else {
            res.send({message: "ProdutoPedido deletado com sucesso."});
        }
    });
}

exports.deleteByPedido = (req, res) => {
    produtoPedidoModel.removeByPedido(req.params.pedidoId, (err, data) => {
        if (err) {
            if (err.kind == "not_found"){
                res.status(404).send({ message: "Pedido não encontrado."});
            } else {
                res.status(500).send({ message: "Erro ao deletar registro"});
            } 
        } else {
            res.send({message: "Pedido deletado com sucesso."});
        }
    });
}

exports.deleteByProduto = (req, res) => {
    produtoPedidoModel.removeByProduto(req.params.produtoId, (err, data) => {
        if (err) {
            if (err.kind == "not_found"){
                res.status(404).send({ message: "Produto não encontrado."});
            } else {
                res.status(500).send({ message: "Erro ao deletar registro"});
            } 
        } else {
            res.send({message: "Produto deletado com sucesso."});
        }
    });
}

exports.deleteAll = (req, res) => {
    produtoPedidoModel.removeAll((err, data) => {
        if (err) {
            if (err.kind == "not_found"){
                res.status(404).send({ message: "ProdutoPedido não encontrado."});
            } else {
                res.status(500).send({ message: "Erro ao deletar registro"});
            } 
        } else {
            res.send({message: "ProdutoPedidos deletados com sucesso."});
        }
    });
}