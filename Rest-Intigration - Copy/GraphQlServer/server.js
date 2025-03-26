const { ApolloServer } = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");
const axios = require("axios")

const typeDefs = require("./schema")
const resolvers = require("./resolver")
async function startServer() {
    const server = new ApolloServer({ typeDefs,resolvers });
    
    const {url} = await startStandaloneServer(server, {listen:{port:4000}});
        console.log(`🚀 Apollo Server is running at ${url}`);
   
}
startServer();