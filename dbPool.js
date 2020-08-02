const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "jawsdb",
    user: "aijhie380lu9q927",
    password: "ttvww8it14fd0aap",
    database: "lltimlsvuc19oe1d"
});

module.exports = pool;
