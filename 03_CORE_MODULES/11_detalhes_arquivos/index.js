const fs = require('fs')

fs.stat("arquivo.txt", (err, data)=>{
    if(err) {
        console.log(err)
        return
    }

    console.log(`O objeto selecionado é um arquivo? ${data.isFile()}`)
    console.log(`O objeto selecionado é um diretório? ${data.isDirectory()}`)
    console.log(`O objeto selecionado é um atalho? ${data.isSymbolicLink()}`)
    console.log(`Tamanho do objeto selecionado? ${data.ctime}`)
    console.log(`O objeto selecionado é um atalho? ${data.size}`)
})