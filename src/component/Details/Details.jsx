import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";

const Details = () => {
  const { editProduct, newProducts } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    editProduct(id);
  }, []);
  // console.log(newProducts);
  return <div></div>;
};

export default Details;
