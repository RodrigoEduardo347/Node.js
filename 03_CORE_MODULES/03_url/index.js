const url = require('url')
const address = 'https://meusite.com.br/catalog?produtos=cadeira'
const  parseUrl = new url.URL(address)

console.log(`Host: ${parseUrl.host}`)
console.log(`Pathname: ${parseUrl.pathname}`)
console.log(`Search: ${parseUrl.search}`)
console.log(`SearchParams: ${parseUrl.searchParams}`)
console.log(`SearchParams.get: ${parseUrl.searchParams.get('produtos')}`)