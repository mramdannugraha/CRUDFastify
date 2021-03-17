
var mysql = require("mysql");

var con = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_SQL_HOST ,
    user: process.env.DB_SQL_USER,
    password: process.env.DB_SQL_PASSWORD,
    database: process.env.DB_SQL_NAME,
    port: process.env.DB_SQL_PORT,
});

module.exports = con;
