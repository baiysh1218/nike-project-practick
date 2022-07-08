import React from "react";
import { Container } from "@mui/material";
import NIKE from "../../img/NIKE.png";
import GROUP from "../../img/Group 2.png";
import Nike from "../../img/Nike-n.png";
import LINE from "../../img/line.png";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";

const Intro = () => {
  return (
    <>
      <div className="container">
        <div className="intro-block">
          <div className="intro-component">
            <h1 className="intro-component-content">AIR Beyond Compare</h1>
          </div>
          <div className="intro-img">
            <img className="intro-img-back" src={NIKE} />
            <img className="intro-img-back-group" src={GROUP} />
            <img className="intro-img-nike-sneacers" src={Nike} />
          </div>
          <div className="intro-content">
            <h5 className="intro-content-text">
              Explore the best Air Max for fall & beyond
            </h5>
          </div>
          <div className="intro-line">
            <img src={LINE} alt="line" className="intro-line-bottom" />
          </div>
        </div>
      </div>
      <Main />
    </>
  );
};

export default Intro;
