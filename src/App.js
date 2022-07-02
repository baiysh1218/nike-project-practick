import React from "react";
import Header from "./component/Header/Header";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

import CartContextProvaider from "./productContext/cartContext";
import ProductsContextProvaider from "./productContext/productContext";
import Routing from "./Routing";

const App = () => {
  return (
    <CartContextProvaider>
      <ProductsContextProvaider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvaider>
    </CartContextProvaider>
  );
};

export default App;
