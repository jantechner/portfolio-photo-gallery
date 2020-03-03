import React, { useRef, useEffect, useState } from "react";
import "./OtherProducts.scss";
import Gallery from "./Gallery";
import { tshirts, getTshirtsOrder } from "./../images/tshirts/tshirts";

function OtherProducts(props) {
  const widthRef = useRef(null);

  const [contentWidth, setContentWidth] = useState(
    widthRef.current ? widthRef.current.offsetWidth : 0
  );

  useEffect(() => {
    setContentWidth(widthRef.current ? widthRef.current.offsetWidth : 0);

    function handleResize() {
      setContentWidth(widthRef.current ? widthRef.current.offsetWidth : 0);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentWidth]);

  return (
    <div>
      <div className="other-products">
        <div className="navigation-bar" style={{ width: contentWidth - 100 }}>
          <a href="#posters" className="navigation-link">
            <div>PLAKATY</div>
          </a>
          <div className="bar"></div>
          <a href="#invitations" className="navigation-link">
            <div className="navigation-link">ZAPROSZENIA</div>
          </a>
          <div className="bar"></div>
          <a href="#cards" className="navigation-link">
            <div className="navigation-link">KARTKI</div>
          </a>
          <div className="bar"></div>
          <a href="#bags" className="navigation-link">
            <div className="navigation-link">TORBY</div>
          </a>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="w" ref={widthRef}></div>
      <div id="posters" className="reftag" />
      <Gallery
        objects={tshirts}
        orderFunction={getTshirtsOrder}
        title="PLAKATY"
        orderButton={true}
      />
      <div id="invitations" className="reftag" />
      <Gallery
        objects={tshirts}
        orderFunction={getTshirtsOrder}
        title="ZAPROSZENIA"
        orderButton={true}
      />
      <div id="cards" className="reftag" />
      <Gallery
        objects={tshirts}
        orderFunction={getTshirtsOrder}
        title="KARTKI"
        orderButton={true}
      />
      <div id="bags" className="reftag" />
      <Gallery
        objects={tshirts}
        orderFunction={getTshirtsOrder}
        title="TORBY"
        orderButton={true}
      />
    </div>
  );
}

export default OtherProducts;
