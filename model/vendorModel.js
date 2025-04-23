const mongoose =require("mongoose");
const vendorSchema=new mongoose.Schema({
name: {
  type:String,
  required:true
},
email: {
  type:String,
  required:true
},
password:{
  type:String,
   required:true
},
userType: {
  type:String,
  //required:true
},
phone: {
  type:String,
  required:true
}
})
mongoose.model("VendorModel",vendorSchema);