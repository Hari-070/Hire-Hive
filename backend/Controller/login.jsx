const bcrypt = require("bcryptjs")
const User = require("../Model/userModel")

const login=async(req,res)=>{
    try {
        const {username,password}=req.body
        const user=await User.findOne({username:username})
        if(!user){
            return res.status(401).json({error:"user doesn't exist!"})
        }
        const pas=await bcrypt.compare(password,user.password)
        //const pas=user.password==password
        if(!pas){
            return res.status(401).json({error:"password is incorrect!"})
        }
        return res.status(200).json("logged in sucessfully!")
    } catch (error) {
        res.status(500).json("error in loginn!")
        console.log(error)
    }
}

module.exports=login