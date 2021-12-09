const sql = require("./db.js");

const Usuario = function(usuario){
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.tipo = usuario.tipo;
}

Usuario.create = (usuario, result) => {
    sql.query("INSERT INTO usuarios SET ?", usuario, (err, res) =>{
        if (err) {
            result(err, null);
        } else {
            result(null, "Usuário criado com sucesso");
        }
    })
}

Usuario.findByEmail = (emailUsuario, result) => {
    sql.query("SELECT * FROM usuarios WHERE email = ?", emailUsuario, (err, res) => {
        if (err){
            result(err, null);
        } else if (res.length) {
            result(null, res[0]);
        } else {
            result({kind: "not_found"}, null);
        }
    })
}

Usuario.findById = (idUsuario, result) => {
    sql.query("SELECT * FROM usuarios WHERE idusuarios = ?", idUsuario, (err, res) => {
        console.log(err);
        if (err){
            result(err, null);
        } else if (res.length) {
            result(null, res[0]);
        } else {
            result({kind: "not_found"}, null);
        }
    })
}

module.exports = Usuario;