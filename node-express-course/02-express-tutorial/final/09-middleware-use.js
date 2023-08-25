const express = require('express');
const app = express();
const middle=require('./middle')
const athorise=require('./athorise')
// req =>middleware => res

// app.use(middle)         //it apply middleware to app get
// app.use('/api',middle)      //it apply middleware starting with /api

app.use([middle,athorise])  //for mutliple middleware

app.get('/',(req,res)=>{
  res.send("Home")
})

app.get('/about',(req,res)=>{
  res.send("Home")
})

app.get('/api/news',(req,res)=>{
  res.send("News")
})

app.get('/api/product',(req,res)=>{
  res.send("Product")
})

app.listen(5000, () => {
  console.log("Starting the server.....")
})
