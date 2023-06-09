const express = require("express");
const cors=require("cors")

const {connection}=require("./configs/db")
const {userRouter}=require("./routes/User.route")

require("dotenv").config()

const app = express();
app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home ");
})

app.use("/users",userRouter)

app.listen(process.env.PORT,async() => {
  try {
    await connection
    console.log("Connected to DB");
  } catch (e) {
    console.log("error to connecting DB", e);
  }
  console.log(`Running at Port ${process.env.PORT}`);
});
