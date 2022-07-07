import axios from "axios";
import React, { useReducer } from "react";
import { useParams } from "react-router-dom";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  newProducts: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 6),
      };

    case "EDIT_PRODUCT":
      return { ...state, newProducts: action.payload };
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

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function editProduct(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: res.data,
    });
  }

  async function updateProduct(id, editObj) {
    await axios.patch(`${API}/${id}`, editObj);
    getProducts();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        pages: state.pages,
        newProducts: state.newProducts,
        createProduct,
        getProducts,
        deleteProduct,
        editProduct,
        updateProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvaider;
