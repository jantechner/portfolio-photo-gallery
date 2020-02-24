import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.scss";
import Logo from "./../logo.jpg";

const hrLenght = { initial: 30, unfolded: 70 };

function Navigation(props) {
  const [hr, resetHr, unfoldHr] = useHrManager(Array(6).fill(hrLenght.initial));
  const [drawerOpen, toggleDrawer] = useState(window.innerWidth > 700 ? true : false);

  useEffect(() => {
    
    function handleResize() {
      toggleDrawer(window.innerWidth > 700 ? true : false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const elements = [
    { to: "/gallery", text: "OBRAZY" },
    { to: "/products", text: "SKLEP" },
    { to: "/about", text: "O MNIE" },
    { to: "/contact", text: "KONTAKT" },
    { to: "/others", text: "INNE" }
  ];

  function makeLink(index) {
    return (
      <Link
        to={elements[index].to}
        className="item"
        onMouseEnter={() => unfoldHr([index, index + 1])}
        onMouseLeave={() => resetHr()}
        onClick={() => toggleDrawer(!drawerOpen)}
      >
        {elements[index].text}
      </Link>
    );
  }

  return (
    <nav>
      <div className="mobile-toolbar">
        <button
          className="drawerButton"
          onClick={() => toggleDrawer(!drawerOpen)}
        >
          open drawer
        </button>
      </div>
      <div className="navigation" style={{ left: drawerOpen ? "0px" : "-280px" }}>
        <div className="logo-box">
          <Link to={elements[0].to}>
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <hr style={{ width: hr[0] + "%" }} />
          {makeLink(0)}
          <hr style={{ width: hr[1] + "%" }} />
          {makeLink(1)}
          <hr style={{ width: hr[2] + "%" }} />
          {makeLink(2)}
          <hr style={{ width: hr[3] + "%" }} />
          {makeLink(3)}
          <hr style={{ width: hr[4] + "%" }} />
          {makeLink(4)}
          <hr style={{ width: hr[5] + "%" }} />
        </div>
        {!useLocation().pathname.includes("/gallery/") && (
          <div className="socials">
            <a href="https://www.facebook.com/MalgorzataTechner/">
              <FontAwesomeIcon
                className="social-icon"
                icon={["fab", "facebook-square"]}
                size="2x"
                style={{ color: "gray" }}
              />
            </a>
            <a href="https://www.instagram.com/notatnik_codzienny/">
              <FontAwesomeIcon
                className="social-icon"
                icon={["fab", "instagram"]}
                size="2x"
                style={{ color: "gray" }}
              />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function useHrManager(initialState) {
  const [state, setState] = useState(initialState);

  function resetHr() {
    const nextState = Array(6).fill(hrLenght.initial);
    setState(nextState);
  }

  function unfoldHr(array) {
    let nextState = Array(6).fill(hrLenght.initial);
    array.map(index => (nextState[index] = hrLenght.unfolded));
    setState(nextState);
  }

  return [state, resetHr, unfoldHr];
}

export default Navigation;
