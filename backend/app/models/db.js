//modulo do MySQL
const mysql = require("mysql");
const dbconfig = require("../configs/db.config.js");

//Cria conexao com o BD
const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB,
    port: dbconfig.PORT
});

//Nova conexao com o MySQL
connection.connect(error=>{
    if (error) 
        throw error;
    console.log("Banco de Dados Conectado!!");
})

module.exports = connection;
