import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./component/Admin/Admin";
import AllProduct from "./component/AllProduct/AllProduct";
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import LogIn from "./component/LogIn/LogIn";
import Main from "./component/Main/Main";
import Profile from "./component/Profile/Profile";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/all-product" element={<AllProduct />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routing;