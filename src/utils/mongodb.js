const mongoose=require("mongoose")
const MONGO_URL =require("./config")
require('dotenv').config();
const SECRET_KEY=process.env.SECRET_KEY;
console.log("Secret Key",SECRET_KEY);
mongoose.connect(MONGO_URL,{
    //useNewUrlParser:true,
     //useUnifiedTopolgy:true
}).then(() => console.log('✅ Connected to MongoDB kapil'))
.catch(err => console.error('❌ MongoDB connection error:', err));


mongoose.connection.on("connected",()=>{
   console.log( "kapil thakur Mongo db connected successfully");
})

mongoose.connection.on("error",(err)=>{
    console.log( "Error connecting db",err);
 })


 module.exports=mongoose;