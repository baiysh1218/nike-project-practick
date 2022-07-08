import { CreditCard } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./component/Admin/Admin";
import AllProduct from "./component/AllProduct/AllProduct";
import Buscet from "./component/Buscet/Buscet";

import Order from "./component/Order/Order";

import Details from "./component/Details/Details";
import DeteilsSection from "./component/DeteilSection/DeteilsSection";
import Edit from "./component/Edit/Edit";
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
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/deteils-section" element={<DeteilsSection />} />
      <Route path="/cart" element={<Buscet />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default Routing;
