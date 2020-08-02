const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "aijhie380lu9q927",
    password: "ttvww8it14fd0aap",
    database: "lltimlsvuc19oe1d"
});

module.exports = pool;
