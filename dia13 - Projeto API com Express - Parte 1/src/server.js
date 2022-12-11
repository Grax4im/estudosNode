const PORT = 3003
const { application } = require('express')
const EXPRESS = require('express')
const APP = EXPRESS();
const bd = require('.\\bd')

APP.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())
})

APP.get('produtos/:id', (req,res,next) => {
    res.send(bd.getproduto(req.params.id))
})

APP.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco

    })
    res.send(produto)
})

APP.listen(PORT, () => {
        console.log(`running in the port ${PORT}`)
})