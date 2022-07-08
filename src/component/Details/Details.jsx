import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";

const Details = () => {
  const { editProduct, newProducts, products } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    editProduct(id);
  }, []);

  return newProducts ? (
    <div className="container">
      <div className="deteils-block">
        <div>
          <div className="deteils-content-block">
            <h3 className="deteils-content-h3">{newProducts.name}</h3>
            <h6 className="deteils-content-h6">{newProducts.price}$</h6>
          </div>
          <div className="deteils-content-block-description">
            <p className="deteils-p">{newProducts.description}</p>
            <p className="deteils-p">{newProducts.delivery}$</p>
          </div>
        </div>
        <div className="deteils-block-img-center">
          <img className="img-details" src={newProducts.image} alt="" />
          <img className="img-details" src={newProducts.imageTwo} alt="" />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
