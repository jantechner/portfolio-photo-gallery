import React from "react";
import Logo from "./../../logosimobilna1.png";
import { Link } from "react-router-dom";

function NavToolbar(props) {
  return (
    <div className="mobile-toolbar">
      <button onClick={props.toggleDrawer}>
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
      </button>
      <Link className="mobile-logo" to="/gallery">
        <img src={Logo} alt="Logo mobile" />
      </Link>
      <div style={{width: 25}}></div>
    </div>
  );
}

export default NavToolbar;
