 const express = require('express')
 const app = express()
 const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://philko:rjsdn611@boilerplate.mikyg.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...')
).catch(err => console.log(err))

 app.get('/', (req,res) => res.send('hello world'))

 app.listen(port, () => console.log(`example app listening on port ${port}`))