const express=require("express")
const port=process.env.PORT||5000  
// const dbConfig=require('./config/dbConfig')




const app=express()


app.listen(port,()=>{
    console.log("server started at" ,port)
})