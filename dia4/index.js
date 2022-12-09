const axios = require('axios')

const chinese = funcionario => funcionario.pais === "China"

const women = funcionario => funcionario.genero === "F"

const lowestSalary = (f, fAtual) => {
	return fAtual.salario < f.salario ? fAtual : f
}

const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(URL).then(response => {
	const funcionarios = response.data

	const filtrado = funcionarios
	.filter(chinese)
	.filter(women)
	.reduce(lowestSalary)

	console.log(filtrado)
})
