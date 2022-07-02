import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./component/Admin/Admin";
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Main from "./component/Main/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Routing;
