const vendorModel= require('../model/vendorModel');
const ShopModel= require('../model/shopModel');
const mongoose=require("../utils/mongodb");
const User=mongoose.model("VendorModel");
const Shop=mongoose.model("ShopModel");
const bcrypt = require('bcryptjs');
const {genToken}= require("../middleware/authenticateToken");
const jwt = require("jsonwebtoken");

const resolvers ={
    Query:{
        users:async ()=>{ 
            const user= await User.find();
            return user
        },
        user:async (_,{},context)=>{   
            if(!context.userId){
                throw new Error("Please login")
            }     
             const data= await User.findOne({_id:context.userId});
            return data;
        },  
        shops:async ()=>{
            return await Shop.find();
        }
    },
    User:{
        shops:async (ur)=>{  return await Shop.find({vendorId:ur._id})   }
    },
    Mutation:{
        signupUser: async (_,{userNew})=>{
            const user= await User.findOne({email:userNew.email})
            if(user){
                   throw new Error("User already Exist")
            }
       const hashPassword= await bcrypt.hash(userNew.password,10);
       const newUser = new User({
            ...userNew,
            password:hashPassword
        })
              return await newUser.save();
        },
        singinUser:async (_,{userSignin})=>{
            const user= await User.findOne({email:userSignin.email});
            if(!user){
                   throw new Error("User does not exist Exist");
            }
            const domatch= await bcrypt.compare(userSignin.password,user.password);
           if(!domatch){
                throw new Error("Password not matched");
            }
            const tokendata={
                userId:user._id
                //email:user.email
               // phone:user.phone
             }
             // const token=  jwt.sign(tokendata,SECRET_KEY,{ expiresIn: "1h" });
             const token=genToken(tokendata);
             return {token};
        },
        createShop:async(_,{shopNew},context)=>{
            if(!context.userId){
                throw new Error("Please login")
            }
            const newShop = new Shop({    ...shopNew ,vendorId: context.userId })
           return await newShop.save();
    }
        
}
}


module.exports=resolvers;
