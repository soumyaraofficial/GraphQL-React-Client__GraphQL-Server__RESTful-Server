import React, { useState } from "react";
import { useQuery, useMutation, ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "./graphql/queries";

const App = () => {
  const { data, refetch } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-and-network",
  });
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", stock: "" });
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    const { data } = await refetch();
    setProducts(data?.getProducts || []);
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) {
      alert("All fields are required");
      return;
    }
    await addProduct({ variables: { ...newProduct, price: parseFloat(newProduct.price), stock: parseInt(newProduct.stock) } });
    setNewProduct({ name: "", category: "", price: "", stock: "" });
    handleGetProducts();
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct({ variables: { id } });
    handleGetProducts();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Management</h1>

      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
          <input className="border p-2 rounded" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
          <input type="number" className="border p-2 rounded" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
          <input type="number" className="border p-2 rounded" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={handleAddProduct}>Add Product</button>
      </div>

      <button className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleGetProducts}>Get Products</button>

      {products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
              <p>Stock: {product.stock}</p>
              <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const WrappedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default WrappedApp;
