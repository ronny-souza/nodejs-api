const moment = require('moment')
const connection = require('../infrastructure/connection')

class Service {
    add(service, response) {
        const schedule_date = moment().format('YYYY-MM-DD')
        const service_date = moment(service.service_date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        
        const isDateValid = moment(service_date).isSameOrAfter(schedule_date)
        const isClientValid = service.client.length >= 5
        
        const validate = [
            {
                name: 'service_date',
                isValid: isDateValid,
                message: 'A data deve ser igual ou maior que a atual'
            },
            {
                name: 'client',
                isValid: isClientValid,
                message: 'O nome do cliente deve conter pelo menos 5 caracteres'
            }
        ]

        const errors = validate.filter(input => !input.isValid)
        const hasErrors = errors.length

        if(hasErrors) {
            response.status(400).json(errors)
        } else {
            const serviceWithDate = {...service, schedule_date, service_date}
            const sql = 'INSERT INTO services SET ?'
    
            connection.query(sql, serviceWithDate, (errors, results) => {
                if(errors) {
                    response.status(400).json(errors)
                } else {
                    response.status(201).json(results)
                }
            })
        }
    }

    list(response) {
        const sql = 'SELECT * FROM services'
        
        connection.query(sql, (errors, results) => {
            if(errors) {
                response.status(400).json(errors)
            } else {
                response.status(200).json(results)
            }
        })
    }

    getById(id, response) {
        const sql = `SELECT * FROM services WHERE id = ${id}`

        connection.query(sql, (errors, results) => {
            const service = results[0]
            if(errors) {
                response.status(400).json(errors)
            } else {
                response.status(200).json(service)
            }
        })
    }

    update(id, values, response) {
        if(values.service_date) {
            values.service_date = moment(values.service_date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }
        const sql = `UPDATE services SET ? WHERE id = ${id}`

        connection.query(sql, values, (errors, results) => {
            if(errors) {
                response.status(400).json(errors)
            } else {
                response.status(200).json(results)
            }
        })
    }
}

module.exports = new Service