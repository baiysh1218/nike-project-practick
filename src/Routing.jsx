import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
};

export default Routing;
