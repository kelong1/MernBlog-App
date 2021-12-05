const express=require("express");

const router=express.Router();
const blogmodel=require("../models/blogModel")

router.get("/blogs",async(req,res)=>{
    const blogs= await blogmodel.find()
    res.send(blogs)
})
router.post("/add",(req,res)=>{
    const blog=new blogmodel({
        title:req.body.title,
        author:req.body.author,
        category:req.body.category,
        blog:req.body.blog,
        
    })
    blog.save()
    .then(data=>{
        res.json(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

module.exports=router;