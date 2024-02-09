const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userrouter=require("./controllers/userRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://abhinandh:jazz9333@cluster0.ubk8s.mongodb.net/resumeuserdb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})
app.use("/resumeapp",userrouter)

app.listen(3005,()=>
{
    console.log("running")
})