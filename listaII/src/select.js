const {connection} = require('./connection')

const conn = connection()

var sql1 = 'SELECT f.func_nome, COUNT(p.pro_id) AS total_produtos FROM fornecedor f JOIN produto p ON f.func_id = p.func_id GROUP BY f.func_nome'
var sql2 = 'SELECT p.pro_nome, p.pro_valor, f.func_nome FROM produto p JOIN fornecedor f ON p.func_id = f.func_id WHERE p.pro_valor > 50'

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