const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const baseName = path.join(__dirname, "models")

app.get('/users/:id', (req, res)=>{
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos procurando o usuario ${id}`)
    res.sendFile(`${baseName}/users.html`)
})

app.get('/', (req, res)=>{
    res.sendFile(`${baseName}/index.html`)
})

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})