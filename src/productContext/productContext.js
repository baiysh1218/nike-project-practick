import axios from "axios";
import React, { useReducer } from "react";
import { useParams } from "react-router-dom";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}
const API = "http://localhost:8002/product";
const ProductsContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  let params = useParams();
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function getProducts() {
    const res = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        pages: state.pages,
        createProduct,
        getProducts,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvaider;
