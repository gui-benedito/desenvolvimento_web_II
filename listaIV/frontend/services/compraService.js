const { response } = require("express")

const getAllCompras = async () => {
    try {
        const compras = (await fetch('http://localhost:5000/compra')).json()
        return compras;
    } catch (err) {
        console.error('Erro ao buscar compras:', err);
        throw err;
    } 
}

module.exports = {
    getAllCompras
}