const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua linguagem favorita? ", (language) => {
    if (language == '') {
        console.log("ERRO! Insira um valor para prosseguir!")
        readline.close()
        return false
    }
    console.log("Então você gosta de %s? Hmmm...Interessante...\n", language)
    readline.close()
})