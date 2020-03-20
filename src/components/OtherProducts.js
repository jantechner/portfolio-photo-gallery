import React from "react";
import Gallery from "./Gallery";
import { tshirts, getTshirtsOrder } from "./../images/tshirts/tshirts";
import { exhibitions, getExhibitionsOrder } from "./../images/exhibitions/exhibitions";
import { projects, getProjectsOrder } from "./../images/projects/projects";
import { books, getBooksOrder } from "./../images/books/books";
import "./OtherProducts.scss";

const products = [
  {
    title: "KOSZULKI",
    id: "tshirts",
    objects: tshirts,
    orderFunction: getTshirtsOrder,
    orderButton: true,
    inProgress: false,
    path: "/tshirts"
  },
  {
    title: "ILUSTRACJE",
    id: "books",
    objects: books,
    orderFunction: getBooksOrder,
    orderButton: false,
    inProgress: false,
    path: "/books"
  },
  {
    title: "WYSTAWY",
    id: "exhibitions",
    objects: exhibitions,
    orderFunction: getExhibitionsOrder,
    orderButton: false,
    inProgress: false,
    path: "/exhibitions"
  },
  {
    title: "PROJEKTY",
    id: "projects",
    objects: projects,
    orderFunction: getProjectsOrder,
    orderButton: false,
    inProgress: false,
    path: "/projects"
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
          <Gallery {...product} orderButton={product.orderButton} inProgress={product.inProgress} path={product.path}/>
        </div>
      ))}
    </div>
  );
}

export default OtherProducts;
