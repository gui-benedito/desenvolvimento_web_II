const { response } = require("express")

const getAllFornecedores = async () => {
    try {
        const fornecedores = (await fetch('http://localhost:5000/fornecedor')).json()
        return fornecedores;
    } catch (err) {
        console.error('Erro ao buscar fornecedores:', err);
        throw err;
    } 
}

const getFornecedorById = async (id) => {
    try {
        const fornecedor = (await fetch(`http://localhost:5000/fornecedor/${id}`)).json()
        return fornecedor
    } catch (err) {
        console.error('Erro ao buscar fornecedor:', err);
        throw err;
    }
}

const excluirFornecedor = async (id) => {
    try {
        const excluir = await fetch(`http://localhost:5000/fornecedor/${id}`, {
            method: 'DELETE'
        })
        return excluir
    } catch (err) {
        console.error('Erro ao excluir fornecedor:', err);
        throw err;
    }
}

module.exports = {
    getAllFornecedores,
    excluirFornecedor,
    getFornecedorById
}