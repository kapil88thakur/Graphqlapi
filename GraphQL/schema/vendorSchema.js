//const {gql}=require("apollo-server");
module.exports=`
type Query {
    users:[User]
    user:User
}

type User{
    _id:ID
    name:String
    email:String
    userType:String
    phone:String
    shops:[Shop]
}


    type Mutation{
        signupUser(userNew:UserInput!):User
        singinUser(userSignin:UserSigninInput!): UserData
    }

    type UserData{
        token:String
        user:User
    }
    input UserSigninInput{
        email:String!
        password:String!
    }
  
 
    input UserInput{
        name:String! 
        email:String!
        phone:String!
        password:String!
        userType:String
       
    }

`
//module.exports=vendorSchema;