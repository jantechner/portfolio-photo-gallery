import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "./../logo.jpg";

const hrLenght = { initial: 20, unfolded: 50 };

function Navigation(props) {
  const [hr, resetHr, unfoldHr] = useHrManager(Array(5).fill(hrLenght.initial));
  const elements = [
    { to: "/gallery", text: "gallery" },
    { to: "/about", text: "about" },
    { to: "/products", text: "products" },
    { to: "/contact", text: "contact" }
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
      <img className="logo" src={Logo} alt="Logo" />
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
      </div>
    </div>
  );
}

function useHrManager(initialState) {
  const [state, setState] = useState(initialState);

  function resetHr() {
    const nextState = Array(5).fill(hrLenght.initial);
    setState(nextState);
  }

  function unfoldHr(array) {
    let nextState = Array(5).fill(hrLenght.initial);
    array.map(index => (nextState[index] = hrLenght.unfolded));
    setState(nextState);
  }

  return [state, resetHr, unfoldHr];
}

export default Navigation;
