const Service = require('../model/service')


module.exports = app => {
    app.get('/services', (req, res) => {
        res.send("Você está na rota de atendimentos e atualizando sozinho")
    })

    app.post('/services', (req, res) => {
        const service = req.body
        Service.add(service)
        res.send("Você está realizando um post na rota de atendimentos")
    })
}