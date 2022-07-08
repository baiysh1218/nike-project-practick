import React from "react";
import Header from "./component/Header/Header";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

import CartContextProvaider from "./productContext/cartContext";
import ProductsContextProvaider from "./productContext/productContext";
import Routing from "./Routing";
import UserContextProvaider from "./productContext/userContext";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <UserContextProvaider>
      <CartContextProvaider>
        <ProductsContextProvaider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvaider>
      </CartContextProvaider>
    </UserContextProvaider>
  );
};

export default App;
