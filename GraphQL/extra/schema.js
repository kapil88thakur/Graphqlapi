const {gql}=require("apollo-server");
const typeDefs=gql`
type Query {
    users:[User]
    user:User
    shops:[Shop]
}

type User{
    _id:ID
    name:String
    storeName:String
    email:String
    userType:String
    phone:String
    shops:[Shop]
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
        signupUser(userNew:UserInput!):User
        singinUser(userSignin:UserSigninInput!): Token
        createShop(shopNew:ShopInput!):Shop
    }

    type Token{
        token:String
    }
    input UserSigninInput{
        email:String!
        password:String!
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
    input UserInput{
        name:String! 
        email:String!
        password:String!
        userType:String
       
    }

`
module.exports=typeDefs;