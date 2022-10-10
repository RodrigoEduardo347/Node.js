const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const users = require('./users')

// middleware para ler o que chega no body da requisição
app.use(
    express.urlencoded({
        extended:true,
    })
)
// transforma o que chega em objeto
app.use(express.json())

// middleware que permite acessarmos arquivos js e css
app.use(express.static('public'))

// recebe as demais rotas
app.use('/users', users)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Server rodando na porta ${port}`)
})