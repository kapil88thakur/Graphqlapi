const vendorSchema= require("./vendorSchema");
const shopSchema= require("./shopSchema");
const productSchema= require("./productSchema");
const { mergeTypeDefs } = require('@graphql-tools/merge')
const schemas = [vendorSchema,shopSchema,productSchema];


module.exports = mergeTypeDefs(schemas);