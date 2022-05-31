 const express = require('express')
 const app = express()
 const port = 5000
 const bodyParser = require('body-parser');

 const config = require('./config/key');

 const { User } = require("./models/User");

 //application/x-www-form-urlencoded 분석해서 가져올 수 있게
 app.use(bodyParser.urlencoded({extended: true}));

 //application/json 분석해서 가져올 수 있게
 app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI
).then(() => console.log('MongoDB Connected...')
).catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world hello world'))

 app.post('/register', (req, res) => {
   // 회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터베이스에 넣어준다
    const user = new User(req.body)

    //mongoDB에 저장, 콜백(에러 날때)
    user.save((err, userinfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
    
 })



 app.listen(port, () => console.log(`example app listening on port ${port}`))