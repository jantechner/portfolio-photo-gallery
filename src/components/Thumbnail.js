import React from "react";
import { Link , useRouteMatch } from "react-router-dom";
import "./Thumbnail.scss";

function Thumbnail(props) {
  let match = useRouteMatch();
  console.log(props.path);
  return (
    <div className="thumbnail">
      <Link to={`${props.path ? props.path : match.path}/${props.id}`}>
        <div className="image-box">
          <img src={props.image72} alt={props.title} />
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
