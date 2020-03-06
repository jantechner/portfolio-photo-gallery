import React from "react";
import Gallery from "./Gallery";
import { tshirts, getTshirtsOrder } from "./../images/tshirts/tshirts";
import "./OtherProducts.scss";

const links = [
  { title: "PLAKATY", href: "#posters" },
  { title: "ZAPROSZENIA", href: "#invitations" },
  { title: "KARTKI", href: "#cards" },
  { title: "TORBY", href: "#bags" }
];

const products = [
  {
    title: "PLAKATY",
    id: "posters",
    objects: tshirts,
    orderFunction: getTshirtsOrder
  },
  {
    title: "ZAPROSZENIA",
    id: "invitations",
    objects: tshirts,
    orderFunction: getTshirtsOrder
  },
  {
    title: "KARTKI",
    id: "cards",
    objects: tshirts,
    orderFunction: getTshirtsOrder
  },
  {
    title: "TORBY",
    id: "bags",
    objects: tshirts,
    orderFunction: getTshirtsOrder
  }
];

function OtherProducts(props) {
  return (
    <div>
      <div className="navigation-bar">
        {links.map((link, index) => (
          <div key={index} className="link-box">
            <a href={link.href} className="navigation-link">
              <div>{link.title}</div>
            </a>
          </div>
        ))}
      </div>
      {products.map((product, index) => (
        <div key={index}>
          <div id={product.id} className="reftag" />
          <Gallery {...product} orderButton={true} />
        </div>
      ))}
    </div>
  );
}

export default OtherProducts;
