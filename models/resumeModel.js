const mongoose =require("mongoose")

const resumeschema=new mongoose.Schema(
    {
        userId:
        {
            reuired:true,
            type:mongoose.Schema.Types.ObjectId,
            ref:"userlogin"
        },
        Name:
        {
             type:String,
             required:true       
        },
        emailid:
        {
             type:String,
             required:true       
        },
        phoneNo:
        {
             type:String,
             required:true       
        },
        qualification:
        {
             type:String,
             required:true       
        },
        skills:
        {
             type:String,
             required:true       
        },
        certification:
        {
             type:String,
             required:true       
        }
        
    }
)

module.exports=mongoose.model("resumemodel",resumeschema)