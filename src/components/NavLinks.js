import React, { useState } from "react";
import { Link } from "react-router-dom";

const hrLenght = { initial: 30, unfolded: 70 };

function NavLinks(props) {
  const [hr, resetHr, unfoldHr] = useHrManager(
    Array(props.links.length + 1).fill(hrLenght.initial)
  );
  const links = props.links;
  const toggle = props.toggle;
  const isMobile = props.isMobile;

  function NavLink(props) {
    return (
      <Link
        to={links[props.index].to}
        className="nav-link"
        onMouseEnter={isMobile ? () => {return false} : () => unfoldHr([props.index, props.index + 1])}
        onMouseLeave={() => resetHr()}
        onClick={() => toggle()}
        onTouchMove={() => {}}
      >
        {links[props.index].text}
      </Link>
    );
  }

  return (
    <div className="links">
      <div className="links-separator" style={{ width: hr[0] + "%" }} />
      <NavLink index={0} />
      <div className="links-separator" style={{ width: hr[1] + "%" }} />
      <NavLink index={1} />
      <div className="links-separator" style={{ width: hr[2] + "%" }} />
      <NavLink index={2} />
      <div className="links-separator" style={{ width: hr[3] + "%" }} />
      <NavLink index={3} />
      <div className="links-separator" style={{ width: hr[4] + "%" }} />
      <NavLink index={4} />
      <div className="links-separator" style={{ width: hr[5] + "%" }} />
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

export default NavLinks;
