// vamos inserir o nome Matheus por meio de métodos
// process.argv é um array especial do Node.js que recebe os comandos e argumentos
console.log(process.argv)
// executamos o comando acima passamento o argumento nome="Matheus"
// node index.js nome="Matheus"

// o método slice resgata os elementos do array na posição 2
const argv = process.argv.slice(2);
// imprime a terceira linha process.argv
console.log("Argv: ", argv)

// pega a primeira linha do argv e o separa em duas strings com base no '='
// pega a segunda posição (depois do '=')
const nome = argv[0].split("=")[1]
console.log("Nome: ", nome)