const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto 
}

function deletarProduto(id) {
    const produto = produtos[i]
    delete produtos[id]
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos) 
}

//exportando algumas funções(com excessão do sequente, que é interno)
module.exports = {salvarProduto, getProduto, getProdutos, deletarProduto}