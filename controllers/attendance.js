/**
 * Configurando rota de atendimento
 * recebendo o app
 * 
 */

module.exports = app => {
    app.get('/attendance', (req, res) => {
        res.send("Você está na rota de atendimentos e atualizando sozinho")
    })
}