const { response } = require("express")

const getAllProdutos = async () => {
    try {
        const produtos = (await fetch('http://localhost:5000/produto')).json()
        return produtos;
    } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        throw err;
    } 
}

const getProdutoByID = async (id) => {
    try {
        const produto = (await fetch(`http://localhost:5000/produto/${+id}`)).json()
        return produto
    } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        throw err;
    }
}

const excluirProduto = async (id) => {
    try {
        const excluir = await fetch(`http://localhost:5000/produto/${id}`, {
            method: 'DELETE'
        })
        return excluir
    } catch (err) {
        console.error('Erro ao excluir produto:', err);
        throw err;
    }
}

module.exports = {
    getAllProdutos,
    excluirProduto,
    getProdutoByID
}