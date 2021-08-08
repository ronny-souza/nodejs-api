const moment = require('moment')
const connection = require('../infrastructure/connection')

class Service {
    add(service) {
        const schedule_date = moment().format('YYYY-MM-DD HH:MM:SS')
        const service_date = moment(service.service_date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const serviceWithDate = {...service, schedule_date, service_date}
        const sql = 'INSERT INTO services SET ?'

        connection.query(sql, serviceWithDate, (error, result) => {
            if(error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
    }
}

module.exports = new Service