import React from "react";

export const productsContext = React.createContext();

const ProductsContextProvaider = ({ children }) => {
  return (
    <productsContext.Provider value={{}}>{children}</productsContext.Provider>
  );
};

export default ProductsContextProvaider;
