// dá erro
const x = '10'

if(!Number.isInteger(x)){
    throw new Error("ERRO! O valor de X não é um inteiro como o esperado!")
}

console.log("Passei da validação!")

// dá certo 
const y = 10

if(!Number.isInteger(y)){
    throw new Error("ERRO! O valor de X não é um inteiro como o esperado!")
}

console.log("Passei da validação!")