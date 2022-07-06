import React from "react";
import Sneakers from "../../img/Nike-sneakers-Main.png";
import NikeZoom from "../../img/NIKE ZOOM.png";
import Vector1 from "../../img/Vector-1.png";
import Vector2 from "../../img/Vector-2.png";
import Vector3 from "../../img/Vector-3.png";
import Vector from "../../img/Vector.png";
import Arrow from "../../img/Group 3.png";
import { IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="background-main">
      <div className="container">
        <div className="main-content-description">
          <h3 className="main-content-description-text">
            The Nike ZoomX Vaporfly
          </h3>
        </div>
        <div className="main-content-sneakers-img">
          <img className="main-sneakers" src={Sneakers} alt="" />
          <img className="main-nike-str" src={NikeZoom} alt="" />
        </div>
        <div className="price">
          <h3 className="price-num">250$</h3>
          <IconButton onClick={() => navigate("/deteils-section")}>
            <img className="price-arrow" src={Arrow} alt="" />
          </IconButton>
        </div>
      </div>
      <img className="img-back-vector" src={Vector} alt="" />
      <img className="img-back-vector-1" src={Vector1} alt="" />
      <img className="img-back-vector-2" src={Vector2} alt="" />
      <img className="img-back-vector-3" src={Vector3} alt="" />
    </div>
  );
};

export default Main;
