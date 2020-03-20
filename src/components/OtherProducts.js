import React from "react";
import Gallery from "./Gallery";
import { tshirts, getTshirtsOrder } from "./../images/tshirts/tshirts";
import "./OtherProducts.scss";

const links = [
  { title: "WYSTAWY", href: "#posters" },
  { title: "ILUSTRACJE", href: "#invitations" },
  { title: "PROJEKTY", href: "#cards" },
  { title: "NOTATNIK", href: "#bags" }
];

const products = [
  {
    title: "WYSTAWY",
    id: "posters",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: false,
    inProgress: true
  },
  {
    title: "ILUSTRACJE",
    id: "invitations",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: false,
    inProgress: true
  },
  {
    title: "PROJEKTY",
    id: "cards",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: false,
    inProgress: true
  },
  {
    title: "NOTATNIK",
    id: "bags",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: false,
    inProgress: true
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
          <Gallery {...product} orderButton={product.orderButton} inProgress={product.inProgress}/>
        </div>
      ))}
    </div>
  );
}

export default OtherProducts;
