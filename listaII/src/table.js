const {connection} = require('./connection')

const conn = connection()

var sql = "create table if not exists fornecedor (func_id int not null primary key auto_increment, func_nome varchar(50))"
var sql2 = "create table if not exists produto (pro_id int primary key auto_increment, pro_nome varchar(50), pro_valor decimal(10,2), func_id int, foreign key(func_id) references fornecedor(func_id))"


conn.connect((err) => {
    if (err) throw err
    conn.query(sql, (err) => {
        if (err) throw err
        console.log('Tabela criada com sucesso')
    })
    conn.query(sql2, (err) => {
        if (err) throw err
        console.log('Tabela criada com sucesso')
    })
    conn.end()
})