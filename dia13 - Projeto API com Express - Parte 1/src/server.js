const PORT = 3003
const { application } = require('express')
const EXPRESS = require('express')
const APP = EXPRESS();
const bodyParser = require('body-parser')
const bd = require('.\\bd')

APP.use(bodyParser.urlencoded({extended: true}))

APP.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

APP.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())
})

APP.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco

    })
    res.send(produto)
})

APP.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)            
})

APP.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.deletarProduto(req.params.id);
    return produto
})

APP.listen(PORT, () => {
        console.log(`running in the port ${PORT}`)
})