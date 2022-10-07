const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send("Olá mundo! Essa é a minha rota usando Express!")
})

app.listen(port, ()=>{
    console.log(`Server rodando na porta ${port}`)
})