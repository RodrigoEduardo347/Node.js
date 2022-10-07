const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const baseName = path.join(__dirname, "template")

// middleware para ler o que chega no body da requisição
app.use(
    express.urlencoded({
        extended:true,
    }),
)

// transforma o que chega em objeto
app.use(express.json())

app.get('/curriculo', (req, res)=>{
    res.sendFile(`${baseName}/curriculo.html`)
})

app.post('/send-curriculum', (req, res)=>{
    console.log(req.body)
    res.sendFile(`${baseName}/curriculo.html`)
})

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