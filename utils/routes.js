const productRoutes= require("../routes/productsRoutes.js");
const userRoutes=require("../routes/userRoutes.js");
//const vendorRoutes=require("../routes/vendorRoutes.js");
const vendorRoutes=require("../routes/vendorRoutes.js");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(express.json());

    // Set up body-parser middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use("/api/products",productRoutes);
    app.use("/api/users",userRoutes);
    app.use("/api/vendors",vendorRoutes);

}
