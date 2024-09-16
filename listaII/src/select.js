const {connection} = require('./connection')

const conn = connection()

var sql1 = 'SELECT f.forn_nome, COUNT(p.pro_id) AS total_produtos FROM fornecedor f JOIN produto p ON f.forn_id = p.forn_id GROUP BY f.forn_nome'
var sql2 = 'SELECT p.pro_nome, p.pro_valor, f.forn_nome FROM produto p JOIN fornecedor f ON p.forn_id = f.forn_id WHERE p.pro_valor > 50'

conn.connect((err) => {
    if (err) throw err
    conn.query(sql1, (err, result) => {
        if (err) throw err
        console.log(result)
    })
    conn.query(sql2, (err, result) => {
        if (err) throw err
        console.log(result)
    })
    conn.end()
})