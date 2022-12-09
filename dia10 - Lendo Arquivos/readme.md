# Como ler arquivos com o Node de forma síncrona e assíncrona?

A leitura de arquivos, também conhecida como IO(input/output) é uma importante, e as vezes demorada, operação feita pelo backend da aplicação.
A leitura de arquivos assíncrona trás a vantagem de não precisarmos esperar a leitura de um arquivo gigante para só depois continuar com as operações do sistema.

No exemplo a seguir criei dois arquivos:

<code>
>file.json
>index.js
</code>

### O file(arquivo que será lido):

<code>
{
    "db": {
        "host": "localhost",
        "port": "5432",
        "user": "usuario",
        "pass": "123456"
    }
}
</code>

## A biblioteca fs

Essa é uma biblioteca nativa do NODE para esse tipo de operação.
Começaremos por importa-la

<code>
const fs = require('fs')
</code>

## Informando o caminho

Como o arquivo file.json foi criado no mesmo diretório, o caminho fica assim:

**WINDOWS**
<code>
const fs = require('fs')
const path = __dirname + '\\file.js'
</code>

**LINUX E MAC**
<code>
const fs = require('fs')
const path = __dirname + '/file.js'
</code>


## Lendo arquivo de forma síncrona

É possivel, para leitura de pequenos arquivos, uma leitura síncrona.

<code>
const fs = require('fs')
const path = __dirname + '\\file.js'

//função readFileSync, passando o caminho e o ENCODE
const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo)
</code>


## Lendo arquivo de forma assíncrona

<code>
<code>
const fs = require('fs')
const path = __dirname + '\\file.js'

//usando a função readFile, passando caminho, ENCODE e uma função de callback
fs.readFile(path, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log('config')
})
</code>
</code>



