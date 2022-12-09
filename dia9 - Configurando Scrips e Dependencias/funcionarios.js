const axios = require('axios')

const chinese = f => f.pais == 'China'

const women = f => f.genero == 'F'

const menorSalario = (menor, atual) => atual.salario < menor.salario ? atual : menor

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
	const funcionarios = response.data
	
	const result = funcionarios
	.filter(chinese)
	.filter(women)
	.reduce(menorSalario)

	console.log(result)
}	
)


