import React from "react";
import { Link } from "react-router-dom";
import "./SectionHeader.scss";

function SectionHeader(props) {
  return (
    <div>
      <div className="section-header">
        <div className="line"></div>
        <div className="text">{props.title}</div>
        <div className="line"></div>
        {props.orderButton && (
          <Link to="/contact" className="order-button">
            ZAMÓW
          </Link>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
