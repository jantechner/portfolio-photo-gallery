import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Thumbnail.scss";

function Thumbnail(painting) {
  let match = useRouteMatch();
  console.log(match)
  return (
    <div className="thumbnail">
      <Link to={`${match.path}/${painting.id}`}>
        <img src={painting.image} alt={painting.title} />
      </Link>
    </div>
  );
}

export default Thumbnail;
