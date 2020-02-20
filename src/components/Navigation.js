import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.scss";
import Logo from "./../logo.jpg";

const hrLenght = { initial: 30, unfolded: 70 };

function Navigation(props) {
  const [hr, resetHr, unfoldHr] = useHrManager(Array(6).fill(hrLenght.initial));
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
      >
        {elements[index].text}
      </Link>
    );
  }

  return (
    <div className="navigation">
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
    </div>
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
