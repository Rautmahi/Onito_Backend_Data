const express = require("express")
const {UserModel}=require("../models/User.model")
require("dotenv").config()
const userRouter=express.Router()


userRouter.post("/register",async(req,res)=>{

    const payload=req.body
    try{
        const user=new UserModel(payload)
        await user.save()
        res.send("Registration Successfully")
    }
    catch(e)
    {
        res.send("Error while register")
        console.log(err)
    }
})


module.exports={
    userRouter
}