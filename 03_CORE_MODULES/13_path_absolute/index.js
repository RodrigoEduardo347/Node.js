const path = require('path')

// pega o caminho absoluto
console.log(path.resolve('zfile.txt'))

// construindo o caminho
const midFolder = 'relatorios'
const fileName = 'matheus.txt'

// gera um caminho utilizando as informações passadas
const finalPath = path.join("/", "arquivos", midFolder, fileName)
console.log(finalPath)