import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPaintingById, getAdjacentPaintingsId } from "./../images/paintings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PaintingDetails.scss";

class PaintingDetails extends Component {
  constructor(props) {
    super(props);
    const paintingId = this.props.match.params.paintingId;
    this.painting = this.fetchPainting(paintingId);
    this.state = { paintingId: paintingId };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.paintingId !== prevProps.match.params.paintingId
    ) {
      const paintingId = this.props.match.params.paintingId;
      this.painting = this.fetchPainting(paintingId);
      this.setState({ paintingId: paintingId });
    }
  }

  fetchPainting(id) {
    return {
      ...getPaintingById(id),
      ...getAdjacentPaintingsId(id)
    };
  }

  render() {
    if (!this.painting.valid) {
      return <h1>No such painting</h1>;
    } else {
      return (
        <div className="painting-details">
          <div className="description">
            <span>{`"${this.painting.title}"`}</span>
            <span>{this.painting.size[0] + "x" + this.painting.size[1]}</span>
            <span>{this.painting.technique}</span>
            <span>{this.painting.year}</span>
          </div>

          <div className="image-navigation-wrapper">
            <div className="painting-link left-arrow">
              {this.painting.id !== this.painting.previous &&
                <Arrow id={this.painting.previous} direction="left" />}
            </div>
            <img className="image" src={this.painting.image} alt={this.painting.title} />
            <div className="painting-link right-arrow">
              {this.painting.id !== this.painting.next &&
                <Arrow id={this.painting.next} direction="right" />}
            </div>
          </div>
        </div>
      );
    }
  }
}

function Arrow(props) {
  const icon =
      props.direction === "left" ? ["fas", "chevron-left"] : ["fas", "chevron-right"];
    return (
      <Link to={props.id.toString()}>
        <FontAwesomeIcon icon={icon} size="2x" style={{ color: "lightgray" }} />
      </Link>
    );
}

export default PaintingDetails;


