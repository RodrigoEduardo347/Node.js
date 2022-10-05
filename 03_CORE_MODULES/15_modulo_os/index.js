const os = require('os')

// imprime a quantidade de cpus da máquina onde está rodando o servidor
console.log(os.cpus())

// imprime a quantidade de memória ram ainda disponível
console.log(os.freemem())

// imprime o usuário do sistema
console.log(os.homedir())

// imprime o sistema operacional onde roda o sistema
console.log(os.type())