const instanciaUnica1 = require(instanciaUnica)()
const instanciaUnica2 = require(instanciaUnica)()
const instanciaNova = require(instanciaNova)
const instanciaNova2 = require(instanciaNova)

//incrementa pra 2
instanciaUnica1.inc();
//incrementa pra 2 também, a outra instância
instanciaUnica2.inc();

console.log(`Instacia Unica 1: ${instanciaUnica1}`)
console.log(`Instacia Unica 2: ${instanciaUnica2}`)