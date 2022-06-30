import React from "react";
import axios from "axios";

export const productsContext = React.createContext();

const productsContextProvaider = ({}) => {
  return (
    <productsContext.Provider value={{}}>{children}</productsContext.Provider>
  );
};

export default productsContextProvaider;
