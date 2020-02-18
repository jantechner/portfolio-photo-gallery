import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Thumbnail.scss";

function Thumbnail(painting) {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div className="thumbnail">
      <Link to={`${match.path}/${painting.id}`}>
        <div className="image-container">
          <div className="image-box">
            <img src={painting.image} alt={painting.title} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
