import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";

function Thumbnail(painting) {
  return (
    <div className="thumbnail">
      <Link to={`painting/${painting.id}`}>
        <img src={painting.image} alt={painting.title} />
      </Link>
    </div>
  );
}

export default Thumbnail;
