const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { bisque } = require('color-name')

app.use(express.json)

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    try {
        const salt = bcrypt.genSalt()
        const hashedPassword = await.bcrypt.hash(req.body.passowrd, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { username: req.body.username, passowrd: req.body.passowrd}
        user.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.listen(3000)
