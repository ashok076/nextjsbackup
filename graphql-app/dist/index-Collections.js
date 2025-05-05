import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
//schema definition 
const typeDefs = `
 type User {
    id:ID!
    name:String!
    age:Int
    points:Float
    status:Boolean
    address:Address
 }

 type Address {
    city:String
    state:String
 }

 type Query {
    users:[User]
 }
`;
//biz logic : hello query implementation
const resolvers = {
    //Query
    Query: {
        //api implementation
        users() {
            return [{
                    id: 1,
                    name: 'Subramanian',
                    age: 43,
                    address: {
                        city: 'Coimbatore',
                        state: 'TN'
                    },
                    status: true,
                    points: 10.5
                },
                {
                    id: 2,
                    name: 'Murugan',
                    age: 56,
                    address: {
                        city: 'Coimbatore',
                        state: 'TN'
                    },
                    status: true,
                    points: 10.5
                }
            ];
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
