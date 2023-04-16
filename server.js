const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const user = []

app.set('view-engine','ejs')

app.use(express.urlencoded({extended : false}))

app.get('/' , (req,res) => {

    res.render('index.ejs' , {name : 'priyanshu'})
})

app.get('/login' , (req,res) => {

    res.render('login.ejs')
})

app.post('/login' , async (req,res) => {

    
    try {

        const hashedpassword = await bcrypt.hash(req.body.password,10)
        user.push({
            id: Date.now().toString(),
            email: req.body.name,
            password: hashedpassword,

        })
        res.redirect('/index')
    
    } catch {
        res.redirect('http://34.97.186.138:80')

    }
    console.log(users)
    
    req.body.email
})

app.listen(5500)