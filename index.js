const express=require('express');
const connectDatabase = require('./dataBase');
const movieRouter = require('./router/product');


const app=express();
app.use(express.json())
app.use(movieRouter)
connectDatabase()
.then(()=>{
    app.listen(3001,()=>{
        console.log('server started on port 3001')
    })
})
.catch((error)=>{
    console.log(error)
    throw error;
})