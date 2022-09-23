// --nome=Matheus --idade=30
const minimist = require("minimist");

// executamos o arquivo usando o comando: 
// node index.js --nome="Matheus" --idade=30
// o '--' é apenas uma questão de sintaxe
const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const idade = args["idade"];

console.log(`Olá ${nome}! Você tem ${idade} ano(s), certo?`)