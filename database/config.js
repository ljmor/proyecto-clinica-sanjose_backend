var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, // Número máximo de conexiones en el pool
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true  // Esto permite múltiples queries
});

const dbConection = () => {
    return pool;
};

module.exports = { dbConection };
