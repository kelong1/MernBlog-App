const express= require("express");
const app=express();
const mongoose= require("mongoose")
const cors=require("cors");
const RoutesUrls =require("./Routes/Routes")
const dotenv=require("dotenv");
const  path=require("path")

dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log("server is running"))

app.use(express.json())
app.use(cors())
app.use("/app",RoutesUrls)

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(4000,()=>console.log("port is running"));