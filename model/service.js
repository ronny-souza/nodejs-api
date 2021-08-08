const nodemon = require('nodemon')
const connection = require('../infrastructure/connection')

class Service {
    add(service) {
        const sql = 'INSERT INTO services SET ?'
        connection.query(sql, service, (error, result) => {
            if(error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
    }
}

module.exports = new Service