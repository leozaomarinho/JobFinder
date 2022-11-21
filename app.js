//variaveis de ambiente
const express = require('express');
const app = express();
const db = require('./db/connection.js');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O express esta rodando na porta ${PORT}!`)
})

//dbc onnection
db
    .authenticate()
    .then(() => {
        console.log('conectado ao banco de dados!')
    })
    .catch(err => {
        console.log('Ocorreu um erro ao tentar conectar ao banco de dados!')
    })

//router
app.get('/', (req, res) => {
    res.send('Esta funcionando com nodemon');
});