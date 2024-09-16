const {connection} = require('./connection')

const conn = connection()

var sqlForncedor = 'insert into fornecedor (forn_nome) values ("Friboi"), ("Seara"), ("Swift"), ("Sadia")'
var sqlProduto = 'insert into produto (pro_nome, pro_valor, forn_id) values ("Picanha", 57.99, 1), ("Contra-filé", 43.99, 1), ("Kafta", 34, 1), ("Filé-mignon", 57.99, 1), ("Picanha", 55.99, 2), ("Contra-filé", 41.99, 2), ("Kafta", 36, 2), ("Filé-mignon", 53.99, 2), ("Picanha", 54.99, 3), ("Contra-filé", 43.99, 3), ("Kafta", 36, 3), ("Filé-mignon", 56.99, 3), ("Linguiça", 25.99, 4), ("Picanha suína", 24.99, 4), ("Lombo", 36, 4), ("Presunto", 33, 4)'

conn.connect((err) => {
    if (err) throw err
    conn.query(sqlForncedor, (err) => {
        if (err) throw err
        console.log('Fornecedores cadastrados com sucesso')
    })
    conn.query(sqlProduto, (err) => {
        if (err) throw err
        console.log('Produtos cadastrados com sucesso')
    })
    conn.end()
})