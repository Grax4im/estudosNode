const fs = require('fs')

const path = __dirname + "\\arquivoGerado.json";

const produto = {
    nome: 'Celular',
    preco: 1249.99 ,
    desconto: 0.15
}

const produtoString = JSON.stringify(produto)

fs.writeFile(path, produtoString, err => {console.log(err || 'Arquivo Gerado')})