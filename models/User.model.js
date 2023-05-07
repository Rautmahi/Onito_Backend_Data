const mongoose=require("mongoose")

const userSchema=mongoose.Schema({

    name:{required: true , type:String},
    dob:{required: true ,type:String},
    sex:{required: true ,type:String},
    mobile:Number,
    address:String,
    adharcard:Number,
    state:String,
    city:String,
    country:String,
    pincode:Number,
    occupation:String,
    religion:String,
    marital:String,
    nationality:String,

})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}