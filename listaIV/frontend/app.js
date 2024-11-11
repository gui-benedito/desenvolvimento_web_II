const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const produtosServices = require('./services/produtoServices')
const fornecedorService = require('./services/fornecedorService')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));
const PORT = 8080

// HOME
app.get('/', (req, res) => {
    res.render('index')
})

// PRODUTO
app.get('/produto', async (req, res) => {
    const produtos = await produtosServices.getAllProdutos()
    const fornecedores = await fornecedorService.getAllFornecedores()
    res.render('cadastroProduto', {produtos: produtos, fornecedores: fornecedores})
})

app.get('/produto/editar/:id', async (req, res) => {
    const id = req.params.id
    const produto = await produtosServices.getProdutoByID(id)
    const fornecedores = await fornecedorService.getAllFornecedores()
    res.render('editarProduto', {produto: produto, fornecedores: fornecedores})
})

app.get('/produto/excluir/:id', async (req, res) => {
    const id = req.params.id
    await produtosServices.excluirProduto(+id)
    res.redirect('/produto')
})

// FORNECEDOR
app.get('/fornecedor', async (req, res) => {
    const fornecedores = await fornecedorService.getAllFornecedores()
    res.render('cadastroFornecedor', {fornecedores: fornecedores})
})

app.get('/fornecedor/excluir/:id', async (req, res) => {
    const id = req.params.id
    await fornecedorService.excluirFornecedor(+id)
    res.redirect('/fornecedor')
})

app.get('/fornecedor/editar/:id', async (req, res) => {
    const id = req.params.id
    const fornecedor = await fornecedorService.getFornecedorById(id)
    res.render('editarFornecedor', {fornecedor: fornecedor})
})

// APP
app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`App rodando em http://localhost:${PORT}`)
})