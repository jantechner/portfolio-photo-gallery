import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link
      to={props.link.to}
      className="nav-link"
      onMouseEnter={
        props.isMobile
          ? () => {
              return false;
            }
          : () => props.unfold([props.index, props.index + 1])
      }
      onMouseLeave={props.reset}
      onClick={
        props.isMobile
          ? props.toggle
          : () => {
              return false;
            }
      }
    >
      {props.link.text}
    </Link>
  );
}

export default NavLink;