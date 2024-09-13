const mysql = require('mysql2')

exports.connection = function connection(){
    let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'fatec'
    })
    conn.connect((err) => {
        if (err) throw err
        conn.query('CREATE DATABASE IF NOT EXISTS ativ2', (err) => {
            if (err) throw err
        })
        conn.changeUser({database: 'ativ2'}, (err) => {
            if (err) throw err
            console.log('Conectado!')
        })
    })
    return conn
}
this.connection()