import React, { useRef, useEffect, useState } from "react";
import "./OtherProducts.scss";
import Gallery from "./Gallery";
import { tshirts, getTshirtsOrder } from "./../images/tshirts/tshirts";

function OtherProducts(props) {
  const widthRef = useRef(null);

  const [contentWidth, setContentWidth] = useState(
    widthRef.current ? widthRef.current.offsetWidth : 0
  );

  console.log("render");

  useEffect(() => {

    function calculateWidth() {
      let width = widthRef.current ? widthRef.current.offsetWidth : 0;
      if (window.innerWidth > 1200) {
        width = width - 90
      } else if (window.innerWidth > 900) {
        width = width - 80
      } else if (window.innerWidth > 800) {
        width = width - 70
      } else if (window.innerWidth > 700) {
        width = width - 60
      } else if (window.innerWidth > 500) {
        width = width - 20
      } else {
        width = width - 16
      }
      return width;
    }

    setContentWidth(calculateWidth());

    function handleResize() {
      setContentWidth(calculateWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentWidth]);

  return (
    <div>
      <div className="other-products">
        <div className="navigation-bar" style={{ width: contentWidth}}>
          <div className="link-box">
            <a href="#posters" className="navigation-link">
              <div>PLAKATY</div>
            </a>
          </div>
          <div className="link-box">
            <a href="#invitations" className="navigation-link">
              <div>ZAPROSZENIA</div>
            </a>
          </div>
          <div className="link-box">
            <a href="#cards" className="navigation-link">
              <div className="navigation-link">KARTKI</div>
            </a>
          </div>
          <div className="link-box">
            <a href="#bags" className="navigation-link">
              <div className="navigation-link">TORBY</div>
            </a>
          </div>
        </div>
      </div>
      <div className="spacer" ref={widthRef}></div>
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
