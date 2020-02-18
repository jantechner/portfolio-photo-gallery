import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "./../logo.jpg";

function Navigation(props) {
  return (
    <div className="navigation">
      <img src={Logo} alt="Logo" className="logo"/>
      <Link to="/gallery" className="item">
        <span>Gallery</span>
      </Link>
      <Link to="/about" className="item">
        <span>About</span>
      </Link>
      <Link to="/products" className="item">
        <span>Products</span>
      </Link>
      <Link to="/contact" className="item">
        <span>Contact</span>
      </Link>
    </div>
  );
}

export default Navigation;
