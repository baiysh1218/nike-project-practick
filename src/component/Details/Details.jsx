import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";

const Details = () => {
  const { editProduct, newProducts, products } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    editProduct(id);
  }, []);
  // console.log(id);
  return (
    <div className="container">
      {products.map(item => (
        <div className="deteils-block" key={item.id} item={item}>
          <div>
            <div className="deteils-content-block">
              <h3 className="deteils-content-h3">{item.name}</h3>
              <h6 className="deteils-content-h6">{item.price}</h6>
            </div>
            <div className="deteils-content-block-description">
              <p className="deteils-p">{item.description}</p>
              <p className="deteils-p">{item.gender}</p>
              <p className="deteils-p">{item.delivery}</p>
            </div>
          </div>
          <div className="deteils-block-img-center">
            <img src={item.image} alt="" />
            <img src={item.imageTwo} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
