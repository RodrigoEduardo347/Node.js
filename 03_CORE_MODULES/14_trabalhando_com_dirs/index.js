const fs = require('fs')

if(!fs.existsSync('./minhapasta')) { // verifica se a pasta existe
    console.log("Essa pasta não existe!")
    fs.mkdirSync('minhapasta') // cria a pasta
} else {
    console.log("Essa pasta existe!")
}