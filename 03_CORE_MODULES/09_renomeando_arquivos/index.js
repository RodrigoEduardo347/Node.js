const fs = require('fs')

const nomeAntigo = 'arquivoantigo.txt'
const novoNome = 'novoarquivo.txt'

fs.rename(nomeAntigo, novoNome, function(err) {
    if(err) {
        console.log(err)
        return
    }

    console.log("Arquivo renomeado com sucesso!")
})