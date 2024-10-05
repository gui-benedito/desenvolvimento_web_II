var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

let tarefas = []

app.get('/', (req, res) => {
    res.render('index', { tarefas: tarefas})
})

app.get('/tarefa/novo', (req, res) => {
    res.render('forms')
})

app.get('/tarefa/:id/editar', (req, res) => {
    const id = parseInt(req.params.id)
    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return res.status(404).send('Tarefa não encontrada')
    }
    res.render('edit', { tarefa })
})

app.get('/tarefa', (req, res) => {
    const statusQuery = req.query.status
    let tarefasFiltradas
    if (statusQuery !== undefined) {
        const statusBooleano = statusQuery === 'true'
        tarefasFiltradas = tarefas.filter(tarefa => tarefa.status === statusBooleano)
    } else {
        tarefasFiltradas = tarefas
    }
    res.json(tarefasFiltradas)
})

app.post('/tarefa', (req, res) => {
    const tarefa = {
        nome: req.body.nome,
        status: req.body.status || false
    }
    if(tarefa.id === undefined){
        if(!tarefas.length){
            tarefa.id = 0
        } else {
            const lastId = tarefas[tarefas.length-1]['id']
            tarefa.id = lastId + 1
        }
    }
    const tarefaExistente = tarefas.some((t) => t['nome'] === tarefa['nome'] || t['id'] === tarefa['id'])
    if (tarefaExistente) {
        return res.json({ message: "Já existe tarefa com esse nome ou id" })
    }
    if (tarefa.status === undefined) {
        tarefa.status = false
    }
    tarefas.push(tarefa)
    res.json({ message: "Tarefa criada com sucesso"})
})

app.put('/tarefa/:id', (req, res) => {
    const id = Number(req.params.id)
    const tarefaAtualizada = {
        id: id,
        nome: req.body.nome,
        status: req.body.status 
    }
    if (id !== tarefaAtualizada.id) {
        return res.json({ message: "Id diferentes" })
    }
    const index = tarefas.findIndex(t => t.id == id)
    if (index >= 0) {
        tarefas[index] = tarefaAtualizada;
        return res.json({ message: "Tarefa atualizada com sucesso"})
    } else {
        return res.json({ message: 'Tarefa não encontrada' })
    }
})

app.delete('/tarefa/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = tarefas.findIndex((t) => t.id == id)

    if (index < 0) {
        return res.status(404).json({ message: 'Nenhuma tarefa encontrada' })
    } else {
        tarefas.splice(index, 1)
        return res.json({ message: 'Tarefa deletada com sucesso' })
    }
})

app.listen(5000, (err) => {
    if(err) console.log('Erro ao iniciar aplicação')
    console.log('Aplicação inicializada!')
})