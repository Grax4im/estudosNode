console.log(this === global)
console.log(this === module)

//aqui aponta pro modulo, ou seja, só visivel aqui :)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    //dentro da função aponta para GLOBAL - PRERIGO
    console.log(this === global)
}