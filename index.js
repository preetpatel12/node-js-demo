const express = require('express')


require('dotenv/config')

// const http=require('http')
// const mysql=require('./utils/database')

// mysql.connect(function(err) {
//     if (err) {
//         console.log("er",err);
//     };
//     console.log("Connected!");
//   });

 
const postRouter = require('./routes/product')

const bodyParser = require('body-parser')

// const server=http.createServer((req,res,next)=>{
// console.log("first request has been sent!!");
// })
// alternative statement

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.use('/product', postRouter)

// app.use((req,res,next)=>{
//     console.log("second request has been sent!!!");
// })

app.use((req, res, next) => {
    res.render('PageNot.ejs')
})

const { PORT } = process.env

app.listen(PORT, () => {
    console.log("port  is llisten at ", PORT);
})