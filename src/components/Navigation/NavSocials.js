import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavSocials(props) {
  if (!useLocation().pathname.includes("/gallery/") || props.isMobile) {
    return (
      <div className="social-box">
        <div className="socials">
          <a href="https://www.facebook.com/MalgorzataTechner/">
            <FontAwesomeIcon
              className="social-icon"
              icon={["fab", "facebook-square"]}
              size="2x"
              style={{ color: "gray" }}
            />
          </a>
          <a href="https://www.instagram.com/malgosiatechner/">
            <FontAwesomeIcon
              className="social-icon"
              icon={["fab", "instagram"]}
              size="2x"
              style={{ color: "gray" }}
            />
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default NavSocials;
