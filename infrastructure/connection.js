const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'your_password',
    database: 'petshop_schedule'
})

module.exports = connection