const operacoes = require('./meu_modulo');

console.log("\n\n")
operacoes.operacoes(2,7)

// também podemos fazer:

const retornaOperacoes = operacoes.operacoes // passamos a função para outra variável
console.log("\n\n")

// faz a chamada da função
retornaOperacoes(100,200)