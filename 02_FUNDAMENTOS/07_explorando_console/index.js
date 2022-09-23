const x = 10
const y = 'João'
const z = [10, 'Marcos']

// imprimindo vários valores de variáveis
console.log(x, y, z)

// contagem de impressões
console.count("Já foram impressas tantas mensagens no console")
console.count("Já foram impressas tantas mensagens no console")
console.count("Já foram impressas tantas mensagens no console")
console.count("Já foram impressas tantas mensagens no console")
console.count("Já foram impressas tantas mensagens no console")
console.count("Já foram impressas tantas mensagens no console")

// variáveis entre strings
console.log("Aqui vai o número 10: %i", x)

// limpar o console
setTimeout(() => {
    console.clear()
},2000)