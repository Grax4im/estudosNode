# Escrevendo Arquivos com Node

## A biblioteca fs
Como visto no post anterior(lendo arquivos), a biblioteca padrão do node para leitura e escrita é o fs.

### Importando o fs
<code>
const fs = require('fs')
</code>

### Especificando o caminho e nome do arquivo
**Windows**
<code>
const fs = require ('fs')
const path = __dirname + '\\arquivoGerado.json'
</code>

**Linux e Mac**
<code>
const fs = require('fs')
const path = __dirname + '/arquivoGerado.json'
</code>

### Escrevendo um objeto aleatório e convertendo para JSON
**Windows**
<code>
const fs = require ('fs')
const path = __dirname + '\\arquivoGerado.json'

//objeto
const objetoAleatorio = {
    nome: 'Julius',
    funcao: 'Pai do Chris',
    empregos: 2
}

//convertendo objeto
const objetoConvertido = JSON.stringify(objetoAleatorio)
</code>

### Persistindo o objeto

<code>
const fs = require ('fs')
const path = __dirname + '\\arquivoGerado.json'

//objeto
const objetoAleatorio = {
    nome: 'Julius',
    funcao: 'Pai do Chris',
    empregos: 2
}

//convertendo objeto
const objetoConvertido = JSON.stringify(objetoAleatorio)

//função writeFile
//passamos o caminho, o objetivo JSON e um callback caso ocorra um erro
fs.writeFile(path, objetoConvertido, err => {console.log(err || 'Objetivo persistido')})
</code>
