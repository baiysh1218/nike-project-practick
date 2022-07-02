import axios from "axios";
import React from "react";

export const productsContext = React.createContext();

const ProductsContextProvaider = ({ children }) => {
  const API = "http://localhost:8002/product";
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  return (
    <productsContext.Provider value={{ createProduct }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvaider;
