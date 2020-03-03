import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import NavSocials from "./NavSocials";
import NavToolbar from "./NavToolbar";
import NavLogo from "./NavLogo";
import "./Navigation.scss";

const elements = [
  { to: "/gallery", text: "OBRAZY" },
  { to: "/tshirts", text: "KOSZULKI" },
  { to: "/others", text: "INNE" },
  { to: "/about", text: "O MNIE" },
  { to: "/contact", text: "KONTAKT" }
];

function Navigation(props) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 700 ? true : false
  );
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700 ? true : false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(isMobile ? false : true);
  useEffect(() => setIsDrawerOpen(isMobile ? false : true), [isMobile]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <NavToolbar toggleDrawer={toggleDrawer} />

      <nav className={isDrawerOpen ? "" : "closed"}>
        <NavLogo to={elements[0].to} />
        <NavLinks links={elements} toggle={toggleDrawer} isMobile={isMobile} />
        <NavSocials isMobile={isMobile} />
      </nav>

      <div
        className={`backdrop ${isMobile && isDrawerOpen ? "open" : ""}`}
        onClick={toggleDrawer}
      ></div>
    </div>
  );
}

export default Navigation;
