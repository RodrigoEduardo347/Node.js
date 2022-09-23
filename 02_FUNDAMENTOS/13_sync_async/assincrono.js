const fs = require('fs')

console.log("Início")
fs.writeFile('arquivoAsync.txt', 'Este é o arquivo criado usando Async', () => {
    console.log("Arquivo criado!")
})
console.log("Fim")