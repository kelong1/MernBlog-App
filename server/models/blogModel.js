const mongoose =require("mongoose")

const BlogModelSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
    
})
module.exports=mongoose.model("blogss",BlogModelSchema)