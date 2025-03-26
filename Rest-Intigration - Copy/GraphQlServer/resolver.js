const { default: axios } = require("axios");

const resolvers = {
  Query: {
    getProducts: async () => {
      const response = await axios.get(
        "http://localhost:8080/RestServer/products"
      );
      return response.data;
    },
    getProductByCategory: async (__, { category }) => {
      const response = await axios.get(
        `http://localhost:8080/RestServer/products/${category}`
      );
      return response.data;
    },
  },
  Mutation: {
    addProduct: async (_, { name, category, price, stock }) => {
      const response = await axios.post(
        "http://localhost:8080/RestServer/addProduct",
        { name, category, price, stock}
      );
      return response.data;
    },
    deleteProduct: async (_,{id})=>{
        const response = await axios.delete(`http://localhost:8080/RestServer/deleteProduct/${id}`);
        return response.data;
    }

  },
};

module.exports = resolvers;
