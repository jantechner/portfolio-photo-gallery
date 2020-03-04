import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../logosi3.svg";

function NavLogo(props) {
  return (
    <div className="logo-box">
      <Link to={props.to}>
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default NavLogo;
