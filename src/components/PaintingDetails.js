import React from "react";
import { useParams } from "react-router-dom";
import Paintings from "./../images/paintings";
import "./PaintingDetails.scss";

function PaintingDetails(props) {
  let { paintingId } = useParams();
  let painting = Paintings.find(painting => painting.id.toString() === paintingId);

  if (!painting) {
    return <h1>No such painting</h1>;
  } else {
    return (
      <div className="painting-details">
        <h1>Painting {painting.id}</h1>
        <h2>Title: {painting.title}</h2>
        <img src={painting.image} alt={painting.title} />
      </div>
    );
  }
}

export default PaintingDetails;
