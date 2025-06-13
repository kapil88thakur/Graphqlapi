const mongoose=require("mongoose")
const MONGO_URL =require("./config")
mongoose.connect(MONGO_URL,{
   //  useNewUrlParser:true,
   //  useUnifiedTopolgy:true
}).then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));


mongoose.connection.on("connected",()=>{
   console.log( "Mongo db connected successfully");
})

mongoose.connection.on("error",(err)=>{
    console.log( "Error connecting db",err);
 })


 module.exports=mongoose;