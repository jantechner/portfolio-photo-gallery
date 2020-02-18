import React from "react";
import Thumbnail from "./Thumbnail.js";
import Paintings from "../images/paintings";
import "./Gallery.scss";

function Gallery(props) {
  const thumbnails = Paintings.map(painting => (
    <Thumbnail key={painting.id} {...painting} />
  ));

  return (
    <div id="gallery">
      <div id="thumbnails">{thumbnails}</div>
    </div>
  );
}

export default Gallery;
