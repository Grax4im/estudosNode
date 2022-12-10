const PORT = 3003
const { application } = require('express');
const EXPRESS = require('express')
const APP = EXPRESS();

APP.get('/produtos', (req, res, next) => {
    res.send({
        nome: 'Notebook',
        preco: 123.45
    })
})

APP.listen(PORT, () => {
        console.log(`running in the port ${PORT}`)
})