const vendorModel= require('../../model/vendorModel');
const ShopModel= require('../../model/shopModel');
const mongoose=require("../../utils/mongodb");
const User=mongoose.model("VendorModel");
const Shop=mongoose.model("ShopModel");
const bcrypt = require('bcryptjs');
const {genToken}= require("../../middleware/authenticateToken");
const jwt = require("jsonwebtoken");

module.exports ={
    Query:{
        shops:async ()=>{ 
            const shop= await Shop.find();
            return shop;
        },
        selectShop: async(_,{shopId},context)=>{ 
            if(!context.userId){
                throw new Error("Please login")
            }  
            const tokendata={
                userId:context.userId,
                shopId:shopId
             }
             const token=genToken(tokendata);
             return {token};
            } 
    }, 
    Mutation:{
        createShop:async(_,{shopNew},context)=>{
            if(!context.userId){
                throw new Error("Please login")
            }
            const newShop = new Shop({    ...shopNew ,vendorId: context.userId })
           return await newShop.save();
        }
        
    }
}