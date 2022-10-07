// Módulos Externos
const chalk = require('chalk');
const inquirer = require('inquirer');

// Core Modules
const fs = require('fs');

operation();

function operation() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "O que você deseja fazer?", 
        choices: [
            "Criar conta",
            "Consultar saldo",
            "Depositar",
            "Sacar",
            "Sair"
        ]
    }])
    .then((answer)=> {
        const action = answer['action'];
        if(action === "Criar conta"){
            createAccount();
        } else if(action === "Consultar saldo") {
            getAccountBalance();
        } else if(action === "Depositar") {
            deposit();
        } else if(action === "Sacar") {
            withdraw();
        } else if(action === "Sair") {
            console.log(chalk.bgBlue.black("Deslogado com sucesso!\nObrigado por usar o nosso sistema!"));
            process.exit();
        }

    })
    .catch(err => console.log(err))
}

// create an account
function createAccount(){
    console.log(chalk.bgGreen.black("Obrigado por escolher o nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir!\n\n"));
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([{
        name: "accountName",
        message: "Digite um nome para a sua conta: "
    }])
    .then((answer)=>{
        const accountName = answer['accountName'];
        console.log(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Essa conta já existe! Tente criar com outro nome!\n\n"));
            buildAccount();
            return;
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            `{"balance":0}`,
            function(err) {
                console.log("Erro aqui no fs.writeFileSync():\n", err)
            }
        )

        console.log(chalk.green("Parabéns! A sua conta foi criada com sucesso!\n\n"))
        operation();
    })
}

// add an amount to user account
function deposit() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta? "
        }
    ]).then((answer) => {
        const accountName = answer["accountName"];
        if(!checkAccount(accountName)) {
            return deposit()
        }

        inquirer.prompt([
            {
                name: "amount",
                message: "Quanto voce quer depositar? "
            }
        ]).then((answer)=>{
            const amount = answer["amount"];

            addAmount(accountName, amount);

        }).catch(err => console.log("Erro aqui no deposit - amount():\n", err))
    })
    .catch(err => console.log("Erro aqui no deposit() - accountName:\n", err))
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if(!amount || !Number(amount) || amount < 0) {
        console.log(chalk.bgRed.black("Ocorreu um erro ao tentar inserir o valor informado na banco de dados!\n\n"));
        return deposit();
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.log(`Erro no writeFileSync do addAmount():\n${err}`);
        }
    )

    console.log(chalk.bgGreen.black(`O valor de ${amount}, foi depositado com sucesso!\n\n`));
    return operation();
}

// retorna o saldo da conta
function getAccountBalance() {

    inquirer.prompt([{
        name: "accountName",
        message: "Digite o nome da conta para fazer a consulta: "
    }])
    .then((answer)=>{
        const accountName = answer['accountName'];

        if(!checkAccount(accountName)){
            return getAccountBalance();
        }

        const accountData = getAccount(accountName);
        console.log(chalk.bgGreen.black(`O saldo da sua conta é de R$${accountData.balance}\n\n`));

        return operation();

    }).catch(err => console.log(`Erro no getAccountBalance()\n${err}`))
}

// fazer saque da conta
function withdraw() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite o nome da conta para fazer o saque: "
        }
    ]).then((answer)=>{
        const accountName = answer['accountName'];

        if(!checkAccount(accountName)) {
            return withdraw();
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Qual a quantidade de dinheiro que voce quer sacar? R$'
            }
        ]).then((answer)=> {
            const amount = answer['amount'];

            removeAmount(accountName, amount);

        }).catch(err => console.log(`Erro na hora resgatar o amount na funcao ${withdraw()}`))

    }).catch(err => console.log(`Erro aqui no withdraw()\n${err}`))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if(!amount || amount < 0) {
        console.log(chalk.bgRed.black("ERRO! O valor de saque solicitado e invalido!\n\n"));
        return withdraw();
    }

    if(amount > accountData.balance) {
        console.log(chalk.bgRed.black("ERRO! Voce nao tem essa quantia disponivel para saque!\n\n"));
        return withdraw();
    }

    accountData.balance = Number(accountData.balance) - Number(amount);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(`Erro ao tentar atualizar o valor do saque\n`, err);
        }
    )

    console.log(chalk.bgGreen.black(`Saque no valor de R$${amount} realizado com sucesso!\n\n`));
    return operation();
}

// other functions
function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black("Essa conta não existe! Digite um nome valido!\n\n"));
        return false;
    }
    return true;
}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: "utf8",
        flag: "r"
    })

    return JSON.parse(accountJson);
}