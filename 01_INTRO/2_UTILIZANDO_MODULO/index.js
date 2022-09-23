const fs = require('fs');

fs.readFile('texto.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log('Erro na leitura do arquivo: ', error);
    } else {
        console.log('Arquivo:\n', data);
    }
});