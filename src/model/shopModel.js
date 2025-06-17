const mongoose =require("mongoose");
const shopSchema=new mongoose.Schema({

storeName: {
  type:String,
  required:true
},
vendorId:{
   type:mongoose.Schema.Types.ObjectId,
    ref:"VendorModel"
},
address1: {
  type:String,
  required:true
},
address2: {
  type:String,
 // required:true
},
district: {
  type:String,
  //required:true
},
state: {
  type:String,
 // required:true
},
country: {
  type:String,
 // required:true
},
zip: {
  type:String,
  //required:true
},
lat: {
  type:String,
  //required:true
},
long: {
  type:String,
  //required:true
},
contactName: {
  type:String,
  //required:true
},

phone: {
  type:String,
  //required:true
},
altPhone: {
  type:String,
  //required:true
}

})
mongoose.model("ShopModel",shopSchema);