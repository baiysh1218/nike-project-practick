import React, { useContext, useEffect } from "react";
import { productsContext } from "../../productContext/productContext";
import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import Section from "../Section/Section";

const AllProduct = () => {
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);
  return (
    <div className="container">
      <div className="all-poduct-wrap">
        {products.map(item => (
          <Cart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
