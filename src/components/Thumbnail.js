import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Thumbnail.scss";

function Thumbnail(painting) {
  let match = useRouteMatch();
  return (
    <div className="thumbnail">
      <Link to={`${match.path}/${painting.id}`}>
        <div className="image-box">
          <img src={painting.image} alt={painting.title} />
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
