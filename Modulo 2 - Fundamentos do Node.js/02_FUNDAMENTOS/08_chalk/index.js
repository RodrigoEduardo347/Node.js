// npm install chalk@4.1.2
// usamos essa versão anterior pois ela permite o uso do require
const chalk = require('chalk')

const nota = 10

if(nota >= 6) {
    console.log(chalk.bgGreen.gray.bold("Parabéns! Você foi aprovado!"))
} else {
    console.log(chalk.bgRed.gray.bold("Você foi reprovado! Tenha mais sorte no próximo ano!"))
}