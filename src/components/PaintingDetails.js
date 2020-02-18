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

  const renderLeftArrow = previousPaintingId => {
    if (painting.id === previousPaintingId) {
      return;
    } else {
      return (
        <Link to={previousPaintingId.toString()}>
          <FontAwesomeIcon
            icon={["fas", "chevron-left"]}
            size="2x"
            style={{ color: "lightgray" }}
          />
        </Link>
      );
    }
  };

  const renderRightArrow = nextPaintingId => {
    if (painting.id === nextPaintingId) {
      return;
    } else {
      return (
        <Link to={nextPaintingId.toString()}>
          <FontAwesomeIcon
            icon={["fas", "chevron-right"]}
            size="2x"
            style={{ color: "lightgray" }}
          />
        </Link>
      );
    }
  };

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

        <div className="image-navigation-wrapper">
          <div className="painting-link">
            {renderLeftArrow(previousPaintingId)}
          </div>
          <img src={painting.image} alt={painting.title} />
          <div className="painting-link">
            {renderRightArrow(nextPaintingId)}
          </div>
        </div>
      </div>
    );
  }
}

export default PaintingDetails;
