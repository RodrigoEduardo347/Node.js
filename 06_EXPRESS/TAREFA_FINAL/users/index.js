var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/inscricao', (req, res) => {
    res.sendFile(`${basePath}/form.html`)
})

router.post('/send-curriculum', (req, res) => {
    const data = req.body;
    console.log(`Chega:`, data)
    console.log(`Nome: ${data.name}`)
    console.log(`Chega: ${data.age}`)
    return res.status(200)
})

module.exports = router