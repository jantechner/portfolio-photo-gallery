import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavSocials from "./NavSocials";
import "./Navigation.scss";
import Logo from "./../logo.jpg";

const elements = [
  { to: "/gallery", text: "OBRAZY" },
  { to: "/products", text: "SKLEP" },
  { to: "/about", text: "O MNIE" },
  { to: "/contact", text: "KONTAKT" },
  { to: "/others", text: "INNE" }
];

function Navigation(props) {
  const [isMobile, setMobile] = useState(
    window.innerWidth < 700 ? true : false
  );
  const [drawerOpen, toggleDrawer] = useState(isMobile ? false : true);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < 700 ? true : false);
      toggleDrawer(window.innerWidth < 700 ? false : true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      {/* MOBILE TOOLBAR */}
      <div className="mobile-toolbar">
        <button
          className="drawer-button"
          onClick={() => toggleDrawer(!drawerOpen)}
        >
          <div className="button-line"></div>
          <div className="button-line"></div>
          <div className="button-line"></div>
        </button>
      </div>

      <div className={drawerOpen ? "navigation" : "navigation closed"}>
        <div className="logo-box">
          <Link to={elements[0].to}>
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>

        <NavLinks
          links={elements}
          toggle={() => toggleDrawer(isMobile ? !drawerOpen : true)}
          isMobile={isMobile}
        />
        <NavSocials />
      </div>
      {isMobile && drawerOpen && (
        <div className="backdrop" onClick={() => toggleDrawer(!drawerOpen)}></div>
      )}
    </nav>
  );
}

export default Navigation;
