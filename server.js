const {ApolloServer}=require("apollo-server");
const {ApolloServerPluginLandingPageGraphQLPlayground}=require("apollo-server-core");
const resolvers=require("./GraphQL/resolver/index");
const typeDefs=require("./GraphQL/schema/index");
const jwt =require("jsonwebtoken")
const SECRET_KEY=process.env.SECRET_KEY;
const server= new ApolloServer(
   { 
        typeDefs,
        resolvers,
        context:({req})=>{
                const {authorization}= req.headers
                if(authorization){
                const data=    jwt.verify(authorization,SECRET_KEY);
                return data;
                }
        },
        plugins:[ApolloServerPluginLandingPageGraphQLPlayground]
    }
)

server.listen().then(({url})=>{

    console.log(`1 Kapil thakur server is ready at ${url}`)
})