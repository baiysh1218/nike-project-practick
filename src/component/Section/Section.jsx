import React, { useContext } from "react";
import "./Section.css";
import Revolution from "../../img/revolution.svg";
import Revolution1 from "../../img/revolution1.svg";
import Revolution2 from "../../img/revolution2.svg";
import { productsContext } from "../../productContext/productContext";

const Section = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="container">
      {products.map(item => (
        <div>
          <div className="section-intro">
            <div className="section-line section-line-top"></div>
            <div className="section-cards">
              <div className="section-card">
                <img src={Revolution2} />
                <p className="section-p">{item.name}</p>
                <p id="section-price">380$</p>
              </div>
              <div className="section-card">
                <img src={Revolution1} />
                <p className="section-p">Nike ZoomX Invincible Run Flyknit</p>
                <p id="section-price">180$</p>
              </div>
              <div className="section-card">
                <img src={Revolution2} />
                <p className="section-p">Nike Revolution 6 Zoom Pegasus</p>
                <p id="section-price"> 220$</p>
              </div>
            </div>
            <div className="section-circles">
              <div className="section-circle"></div>
              <div className="section-circle"></div>
              <div className="section-circle"></div>
            </div>
          </div>
          <div className="section-line"></div>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Section;
