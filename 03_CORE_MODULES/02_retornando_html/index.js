const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 300
    res.setHeader('Contenty-Type','text/html')
    res.end('<h1>Ola mundo!</h1><p>Pagina atualizada com sucesso!</p>')
})

server.listen(port, ()=>{
    console.log(`Server rodando na porta ${port}`)
})