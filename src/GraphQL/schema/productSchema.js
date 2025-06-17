module.exports=`
    type Query {
        products:[product]
    }
    type product{
        _id:ID
        vendorId:ID
        shopId:ID
        title:String
        description:String
        price:String
        instock:String
         sku:String
    }
    type Mutation{
        createProduct(productNew:ProductInput!):product
    }
    input ProductInput{
        title:String
        sku:String
        description :String
        price:String
        instock:String
    }`