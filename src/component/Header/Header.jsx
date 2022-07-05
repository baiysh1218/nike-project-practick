import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Container, IconButton } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();

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
            <SearchIcon className="navbar-search-icon" />
          </IconButton>
          <IconButton onClick={() => navigate("/log-in")}>
            <PersonIcon className="navbar-search-icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
