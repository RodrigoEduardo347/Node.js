const path = require('path');

// o método .extname retorna a extensão do arquivo
const pdf = path.extname("arquivo.pdf");
const php = path.extname("arquivo.php");
const html = path.extname("index.html");

console.log(
    "PDF: ",
    pdf,
    "\nPHP: ",
    php,
    "\nHTML: ",
    html,
    "\n\n"
)