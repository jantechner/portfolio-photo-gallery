import React from "react";
import Gallery from "./Gallery";
import { tshirts, getTshirtsOrder } from "./../images/tshirts/tshirts";
import "./OtherProducts.scss";

const products = [
  {
    title: "KOSZULKI",
    id: "tshirts",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: true,
    inProgress: false
  },
  {
    title: "KSIĄŻKI",
    id: "books",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: false,
    inProgress: true
  },
  {
    title: "WYSTAWY",
    id: "exhibitions",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: false,
    inProgress: true
  },
  {
    title: "PROJEKTY",
    id: "projects",
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
        {products.map((product, index) => (
          <div key={index} className="link-box">
            <a href={`#${product.id}`} className="navigation-link">
              <div>{product.title}</div>
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
