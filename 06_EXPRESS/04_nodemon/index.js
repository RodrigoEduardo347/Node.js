const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const baseName = path.join(__dirname, "models")

app.get('/', (req, res)=>{
    res.sendFile(`${baseName}/index.html`)
})

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})