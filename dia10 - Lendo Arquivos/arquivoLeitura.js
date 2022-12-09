const fs = require('fs')
const path = __dirname + '\\file.json'

//Lendo arquivo de forma Sincrona (forma NÃO adequada)
const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo)

//Lendo arquivo de forma Assincrona
fs.readFile(path, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('.\\file.json')

console.log(config.db)