const Service = require('../model/service')


module.exports = app => {
    app.get('/services', (request, response) => {
        Service.list(response)
    })

    app.get('/services/:id', (request, response) => {
        const id = parseInt(request.params.id)
        Service.getById(id, response)
    })

    app.post('/services', (request, response) => {
        const service = request.body
        Service.add(service, response)
    })

    app.patch('/services/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const values = request.body

        Service.update(id, values, response)
    })
}