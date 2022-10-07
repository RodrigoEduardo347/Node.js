const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const baseName = path.join(__dirname, "models")

const checkAuth = function (req, res, next) {
    req.authStatus = false

    if(req.authStatus) {
        console.log("Você está logado!")
        next()
    } else {
        console.log("Você não está logado!")
        next()
    }
}

app.use(checkAuth) // chama o middleware

app.get('/', (req, res)=>{
    res.sendFile(`${baseName}/index.html`)
})

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})