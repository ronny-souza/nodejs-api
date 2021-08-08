module.exports = app => {
    app.get('/attendance', (req, res) => {
        res.send("Você está na rota de atendimentos e atualizando sozinho")
    })

    app.post('/attendance', (req, res) => {
        console.log(req.body)
        res.send("Você está realizando um post na rota de atendimentos")
    })
}