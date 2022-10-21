const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// configurações do template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res)=>{

    const user = {
        name: "Rodrigo", 
        surname: "Eduardo",
        age: "15"
    }

    const message = "Estou na rota aqui do / "

    const auth = true

    res.render('home', {user: user, message: message, auth})
})

app.listen(3000, ()=>{
    console.log("App rodando!")
})