const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    var urlInfor = require('url').parse(req.url,true)
    const name = urlInfor.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if(!name) {
        res.end(
            "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>"
        )
    }
    else {
        res.end(
            `Ola ${name}! Tudo bem com voce?`
        )
    }
})

server.listen(port, ()=>{
    console.log(`Server rodando na porta ${port}`)
})