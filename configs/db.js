const mongoose=require("mongoose")
const mySecret = process.env['MONGOURL']
require("dotenv").config()


// mongoose.connect(process.env.MONGOURL)
const connection=async()=>{
    try {
        await mongoose.connect(mySecret, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        console.log("db connected")
        
      }
      catch (error) {
        console.error(error);
      }
    }

module.exports={connection}