import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Badge, Container, IconButton } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../../productContext/cartContext";

import ChatIcon from "@mui/icons-material/Chat";

const Navbar = () => {
  const navigate = useNavigate();

  const { getCart, count } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            onClick={() => navigate("/")}
            className="logo-img-nike"
            src={Logo}
            alt="img-logo"
          />
        </div>
        <div className="nevbar-content">
          <p
            onClick={() => navigate("/all-product")}
            className="navbar-content-text">
            All Product
          </p>
          <p className="navbar-content-text" onClick={() => navigate("/admin")}>
            Add Product
          </p>
        </div>
        <div className="search">
          <IconButton>
            <Badge badgeContent={count} color="error">
              <ShoppingCartIcon
                className="navbar-search-icon"
                onClick={() => navigate("/cart")}
              />
            </Badge>
          </IconButton>
          <IconButton onClick={() => navigate("/profile")}>
            <ChatIcon className="navbar-search-icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
