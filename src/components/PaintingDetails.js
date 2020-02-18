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

  if (!painting) {
    return <h1>No such painting</h1>;
  } else {
    const [previousPaintingId, nextPaintingId] = getAdjacentPaintingsId(
      painting.id
    );
    return (
      <div className="painting-details">
        <div className="description">
          <h2>{`"${painting.title}"`}</h2>

          <h5>{painting.size[0] + "x" + painting.size[1]}</h5>
          <h5>{painting.technique}</h5>
          <h5>{painting.year}</h5>
        </div>
        <div>
          <div className="image-navigation-wrapper">
            <Link to={previousPaintingId.toString()}>
              <FontAwesomeIcon
                icon={["fas", "caret-left"]}
                size="2x"
                style={{ color: "lightgray" }}
              />
            </Link>
            <img src={painting.image} alt={painting.title} />
            <Link to={nextPaintingId.toString()}>
              <FontAwesomeIcon
                icon={["fas", "chevron-right"]}
                size="2x"
                style={{ color: "lightgray" }}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PaintingDetails;
