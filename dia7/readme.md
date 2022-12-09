
# Aprendendo sobre o This #

Dependendo de onde foi inserido, a palavra this.AlgumaCoisa pode referênciar coisas completamente diferentes.

## Dentro de um arquivo .js ##

<code>console.log(this == module.exports && this == exports)</code>

### Hãn? ###
Aqui o this referencia o próprio arquivo, o MÓDULO que poderá ser exportado.

## Dentro de uma função ##

<code>
function thisThisIsWeird() {
    console.log(this == global)
}
</code>

### Hãn? ###
Aqui o this referencia o objeto global, acessivel pelo projeto inteiro

## Dentro de uma Arrow function ##

Como toda regra tem uma excessão e o javascript é estranho por natureza, em arrow function o this se refere a outra coisa.
Mas isso eu tenho que estudar porque ainda não compreendi. TODO

Goodbye.


