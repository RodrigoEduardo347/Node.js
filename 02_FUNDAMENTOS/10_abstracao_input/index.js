// inquirer faz a leitura de uma maneira mais rápida e precisa que o readline
// por questões de erro, é necessário instalar a versão npm install inquirer@8.1.0

const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Insira o valor de A: '
    },
    {
        name: 'p2',
        message: 'Insira o valor de B: '
    }
]).then(async (answer)=>{
    console.log(answer)
    const media = (parseInt(answer.p1) + parseInt(answer.p2)) / 2
    console.log(`A média entre as notas ${answer.p1} e ${answer.p2} é igual a ${media}`)

    setTimeout(() => {
        console.clear()
    }, 5000)

}).catch((error)=>{console.log(error)})