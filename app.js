const express = require("express")
require('dotenv').config()
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get('/create',(req,res)=>{
    res.send("hi bitch")
})

app.listen(process.env.PORT ,()=>{
    console.log(`server is running at ${port}`)
})