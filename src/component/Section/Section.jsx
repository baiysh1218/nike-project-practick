import React from "react";
import "./Section.css";
import Revolution from "../../img/revolution.svg";
import Revolution1 from "../../img/revolution1.svg";
import Revolution2 from "../../img/revolution2.svg";

const Section = ({ products }) => {
  console.log(products);
  return (
    <div className="container">
      <div className="section-intro">
        <div className="section-line section-line-top"></div>
        <div className="section-cards">
          <div className="section-card">
            <img src={Revolution2} />
            <p className="section-p">Nike Air Zoom Pegasus 38</p>
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
      <div className="aaaaa"></div>
    </div>
  );
};

export default Section;
