
 //const MONGO_URL="mongodb://root:example@mongo:27017/zapd?authSource=admin"
  //const MONGO_URL="mongodb+srv://ktkapilth:30oct1988@zapd.j1x9h.mongodb.net/";
 const MONGO_URL=process.env['MONGO_URI']?process.env['MONGO_URI']:'mongodb+srv://ktkapilth:30oct1988@zapd.j1x9h.mongodb.net/';
 module.exports=MONGO_URL
 //18 19 23