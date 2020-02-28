import React from "react";

function NavToolbar(props) {
    return (
        <div className="mobile-toolbar">
        <button onClick={props.toggleDrawer}>
          <div className="button-line"></div>
          <div className="button-line"></div>
          <div className="button-line"></div>
        </button>
      </div>
    )
}

export default NavToolbar;