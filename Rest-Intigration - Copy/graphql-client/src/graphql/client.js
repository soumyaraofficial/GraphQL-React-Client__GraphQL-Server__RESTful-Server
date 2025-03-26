import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Connects to your GraphQL Server
  cache: new InMemoryCache(),
});

export default client;
