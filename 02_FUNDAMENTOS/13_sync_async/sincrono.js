const fs = require('fs')

console.log("Início")
fs.writeFileSync('arquivoSync.txt','Este é o arquivo criado usando sync')
console.log("Fim")