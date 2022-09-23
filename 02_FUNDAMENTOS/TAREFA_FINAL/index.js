const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'nome',
        content: 'Insira o nome do usuário: '
    },
    {
        name: 'idade',
        content: 'Insira a idade do usuário: '
    }
]).then((result) => {
    const nome = result.nome
    const idade = parseInt(result.idade)

    if(!nome||!idade){
        throw new Error("ERRO! Preencha todos os campos!")
    }

    console.log(chalk.bgYellow.black(`Olá, ${nome}! Verifiquei que você tem ${idade} ano(s). Correto?`))
}).catch((error)=>{
    console.log(error)
})