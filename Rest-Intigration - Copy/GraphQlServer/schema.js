const { default: gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: Int
    name: String
    category: String
    price: Float
    stock: Int
  }
  type Query {
    getProducts: [Product]
    getProductByCategory(category: String): [Product]
  }
  type Mutation {
    addProduct(
      name: String
      category: String
      price: Float
      stock: Int
    ): Product

    deleteProduct(id: Int): String

    
  }
`;

module.exports = typeDefs;
