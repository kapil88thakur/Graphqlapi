const vendorModel= require('../../model/vendorModel');
const ShopModel= require('../../model/shopModel');
const ProductModel= require('../../model/productModel');
const mongoose=require("../../utils/mongodb");
const User=mongoose.model("VendorModel");
const Shop=mongoose.model("ShopModel");
const Product=mongoose.model("ProductModel");
const bcrypt = require('bcryptjs');
const {genToken}= require("../../middleware/authenticateToken");
const jwt = require("jsonwebtoken");

module.exports ={
    Query:{
        products:async (_,{},context)=>{ 
            if(!context.userId){
                throw new Error("Please login")
            }  
            if(!context.shopId){
                throw new Error("Please login into shop")
            } 
            return await Product.find({
                    vendorId:context.userId,
                    shopId:context.shopId
            });         
        },
    },
    Mutation:{
        createProduct:async(_,{productNew},context)=>{
            if(!context.userId){
                throw new Error("Please login")
            }
            if(!context.shopId){
                throw new Error("Please select Store")
            }
            const newProduct = new Product({ ...productNew ,vendorId: context.userId,shopId:context.shopId })
           return await newProduct.save();
        }
    }
}