const mongoose =require("mongoose");
const productSchema=new mongoose.Schema({

title: {
  type:String,
  required:true
},
vendorId:{
   type:mongoose.Schema.Types.ObjectId,
    ref:"ShopModel"
},
shopId:{
   type:mongoose.Schema.Types.ObjectId,
    ref:"VendorModel"
},
sku: {
  type:String,
  required:true
},
description: {
  type:String,
},
image: {
  type:String,
},
category: {
  type:String,
},
price: {
  type:String,
},
instock: {
    type:String,
  },
tags: {
  type:String,
},
brand: {
  type:String,
},
weight: {
  type:String,
},
length:{
    type:String,
}
})
mongoose.model("ProductModel",productSchema);