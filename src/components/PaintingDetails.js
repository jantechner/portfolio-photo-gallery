import React from "react";
import { Link, useParams } from "react-router-dom";
import Paintings from "./../images/paintings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PaintingDetails.scss";

function getAdjacentPaintingsId(currentId) {
  let index = Paintings.findIndex(p => p.id === currentId);
  const previous = Paintings[index === 0 ? index : index - 1].id;
  const next = Paintings[index === Paintings.length - 1 ? index : index + 1].id;
  return [previous, next];
}

function PaintingDetails(props) {
  let { paintingId } = useParams();
  let painting = Paintings.find(
    painting => painting.id.toString() === paintingId
  );

  const [previousPaintingId, nextPaintingId] = getAdjacentPaintingsId(
    painting.id
  );

  if (!painting) {
    return <h1>No such painting</h1>;
  } else {
    return (
      <div className="painting-details">
        <h1>Painting {painting.id}</h1>
        <h2>Title: {painting.title}</h2>
        <div className="image-navigation-wrapper">
          <Link to={previousPaintingId.toString()}>
            <FontAwesomeIcon
              icon={["fas", "chevron-left"]}
              size="3x"
              style={{ color: "gray" }}
            />
          </Link>
          <img src={painting.image} alt={painting.title} />
          <Link to={nextPaintingId.toString()}>
            <FontAwesomeIcon
              icon={["fas", "chevron-right"]}
              size="3x"
              style={{ color: "gray" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default PaintingDetails;
