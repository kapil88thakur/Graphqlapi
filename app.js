const express = require('express');
const app = express();
require('dotenv').config();
const SECRET_KEY=process.env.SECRET_KEY;

require('./utils/routes')(app);
app.listen((8082),()=>{
    console.log("Server is Running")
})
