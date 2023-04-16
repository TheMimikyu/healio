const express = require('express')
const app = express()

app.set('view-engine','ejs')

app.get('/' , (req,res) => {

    res.render('index.ejs' , {name : 'priyanshu'})
})

app.get('/login' , (req,res) => {

    res.render('login.ejs')
})

app.post('/login' , (req,res) => {

    
})

app.listen(5500)