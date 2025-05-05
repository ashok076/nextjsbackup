import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
//schema definition 
const typeDefs = `
 type Query {
    hello:String
 }
`;
//biz logic : hello query implementation
const resolvers = {
    //Query
    Query: {
        //api implementation
        hello() {
            return 'Hello GraphQl';
        }
    }
};
//Create ApolloServer and deploy schema and resolvers
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
//start web container on which Apollo server going to Run
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
});
console.log('Apollo Server is Ready!', url);
