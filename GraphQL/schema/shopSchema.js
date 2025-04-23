//const {gql}=require("apollo-server");
module.exports=`
type Query {
    shops:[Shop]
    selectShop(shopId:ID!):Token
}
    type Token{
    token:String
    }

    type Shop{
        _id:ID
        vendorId:ID
        storeName:String
        address1:String
        address2 :String
        district:String
        state:String
        country:String
        zip:String
        lat:String
        long :String
        contactName:String
        phone:String
        altPhone:String  
    }

    type Mutation{

        createShop(shopNew:ShopInput!):Shop
    }

  
 input ShopInput{
        storeName:String!
        address1:String!
         address2 :String
        district:String
        state:String
        country:String
        zip:String
        lat:String
        long :String
        contactName:String
        phone:String
        altPhone:String   
}


`
//module.exports=shopSchema;