import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paintings from "./../images/paintings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PaintingDetails.scss";

class PaintingDetails extends Component {
  constructor(props) {
    super(props);
    const paintingId = this.props.match.params.paintingId;
    this.painting = Paintings.find(p => p.id.toString() === paintingId);
    const [previous, next] = this.getAdjacentPaintingsId(paintingId);
    this.previous = previous;
    this.next = next;
    this.state = { paintingId: paintingId };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.paintingId !== prevProps.match.params.paintingId
    ) {
      const paintingId = this.props.match.params.paintingId;
      this.painting = Paintings.find(p => p.id.toString() === paintingId);
      const [previous, next] = this.getAdjacentPaintingsId(paintingId);
      this.previous = previous;
      this.next = next;
      this.setState({paintingId: paintingId});
    }
  }

  getAdjacentPaintingsId(currentId) {
    let index = Paintings.findIndex(p => p.id.toString() === currentId);
    const previous = Paintings[index === 0 ? index : index - 1].id;
    const next =
      Paintings[index === Paintings.length - 1 ? index : index + 1].id;
    return [previous, next];
  }

  renderArrow(direction) {
    const id = direction === "left" ? this.previous : this.next;
    if (this.painting.id === id) {
      return;
    } else {
      return (
        <Link to={id.toString()}>
          <FontAwesomeIcon
            icon={
              direction === "left"
                ? ["fas", "chevron-left"]
                : ["fas", "chevron-right"]
            }
            size="2x"
            style={{ color: "lightgray" }}
          />
        </Link>
      );
    }
  }

  render() {
    if (!this.painting) {
      return <h1>No such painting</h1>;
    } else {
      return (
        <div className="painting-details">
          <div className="description">
            <h2>{`"${this.painting.title}"`}</h2>
            <h5>{this.painting.size[0] + "x" + this.painting.size[1]}</h5>
            <h5>{this.painting.technique}</h5>
            <h5>{this.painting.year}</h5>
          </div>

          <div className="image-navigation-wrapper">
            <div className="painting-link">
              {this.renderArrow("left")}
            </div>
            <img src={this.painting.image} alt={this.painting.title} />
            <div className="painting-link">
              {this.renderArrow("right")}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PaintingDetails;
