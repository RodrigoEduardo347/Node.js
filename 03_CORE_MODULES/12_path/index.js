const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'

console.log(`Caminho até chegar ao arquivo: ${path.dirname(customPath)}`)
console.log(`Nome do arquivo base: ${path.basename(customPath)}`)
console.log(`Extensão do arquivo: ${path.extname(customPath)}`)