var mysql = require('mysql');
const fs = require('fs');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 25741,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('./certs/ca.pem'), // Ruta al certificado
    },
    multipleStatements: true,
});


const dbConection = () => {
    return pool;
};

module.exports = { dbConection };
