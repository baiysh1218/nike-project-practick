import React from "react";

export const cartContext = React.createContext();

const CartContextProvaider = ({ children }) => {
  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
};
export default CartContextProvaider;
