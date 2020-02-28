import React, { useState } from "react";
import NavLink from "./NavLink";

const hrLenght = { initial: 30, unfolded: 70 };

function NavLinks(props) {
  const [hr, resetHr, unfoldHr] = useHrManager(
    Array(props.links.length + 1).fill(hrLenght.initial)
  );

  let linksAndSeparators = [];
  props.links.map((link, index) => {
    linksAndSeparators.push(
      <div
        key={index * 2}
        className="links-separator"
        style={{ width: hr[index] + "%" }}
      />
    );
    linksAndSeparators.push(
      <NavLink
        key={index * 2 + 1}
        index={index}
        link={link}
        unfold={unfoldHr}
        reset={resetHr}
        isMobile={props.isMobile}
        toggle={props.toggle}
      />
    );
    return null;
  });

  linksAndSeparators.push(
    <div
      key={props.links.length * 2}
      className="links-separator"
      style={{ width: hr[props.links.length] + "%" }}
    />
  );

  return <div className="links">{linksAndSeparators}</div>;
}

function useHrManager(initialState) {
  const [state, setState] = useState(initialState);

  function resetHr() {
    const nextState = Array(initialState.length).fill(hrLenght.initial);
    setState(nextState);
  }

  function unfoldHr(array) {
    let nextState = Array(initialState.length).fill(hrLenght.initial);
    array.map(index => (nextState[index] = hrLenght.unfolded));
    setState(nextState);
  }

  return [state, resetHr, unfoldHr];
}

export default NavLinks;
