const minimist = require('minimist');
const args = minimist(process.argv.slice(2))

const a = args["a"];
const b = args["b"];

const soma = require('./somas').soma;
soma(a, b)