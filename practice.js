const usermodels=require("../models/usermodel")
const router = require("./controllers/userRouter")

const hasshfunction=async(password)=>
{
    const salt=bcrypt.getSalt(10)
    return await bcrypt.hash(password,salt)
}

router.post("/add",async(req,res)=>
{
    const{data}={"data":req.body}
    const password=data.password
    const hashedpassword=hasshfunction(password).then((hashedpassword)=>
    {
        data.password=hashedpassword
        const model=new usermodels(data)
        usermodels.save()
        res.json({status:"success"})
    })

})

router.post("/login",(req,res)=>
{
    const data=req.body
    const email=data.email
    const password=data.password
    const details=usermodels.findOne({emai,email})
    if(!data)
    {
        return(
            res.json({status:"success"})
        )
    }
    dbpassword=data.password
    const map=bcrypt.compare(password,dbpassword)
    if(!map)
    {
        return(
            res.json({status:success})
        )
    }
    res.json({status:success})

})