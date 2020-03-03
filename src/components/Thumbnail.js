import React from "react";
import { Link } from "react-router-dom";
import "./Thumbnail.scss";

function Thumbnail(image) {
  // let match = useRouteMatch();
  return (
    <div className="thumbnail">
      <Link to={`gallery/${image.id}`}>
        <div className="image-box">
          <img src={image.image72} alt={image.title} />
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
