import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      category
      price
      stock
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $category: String!, $price: Float!, $stock: Int!) {
    addProduct(name: $name, category: $category, price: $price, stock: $stock) {
      id
      name
      category
      price
      stock
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;
