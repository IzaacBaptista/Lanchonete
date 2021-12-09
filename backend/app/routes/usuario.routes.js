module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller.js");
    //caso ja tenha cadastro
    app.post("/signin", usuarioController.signIn);
    //caso nao tenha cadastro
    app.post("/signup", usuarioController.signUp);
}