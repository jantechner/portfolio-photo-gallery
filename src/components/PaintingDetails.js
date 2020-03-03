import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PaintingDetails.scss";

class PaintingDetails extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.object = this.fetchObject(this.props.get, this.props.adj, id);
    this.state = { paintingId: id };
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id;
      this.object = this.fetchObject(this.props.get, this.props.adj, id);
      this.setState({ paintingId: id });
    }
  }

  fetchObject(get, adj, id) {
    return {
      ...get(id),
      ...adj(id)
    };
  }

  render() {
    if (!this.object.valid) {
      return <h1>No such painting</h1>;
    } else {
      return (
        <div className="painting-details">
          {this.object.size && (
            <div className="description">
              <span className="title">{this.object.title}</span>
              <span>
                {this.object.size[0] +
                  "x" +
                  this.object.size[1] +
                  ", " +
                  this.object.technique}
              </span>
              <span>{"rok " + this.object.year}</span>
            </div>
          )}

          <div className="image-navigation-wrapper">
            <div className="painting-link left-arrow">
              {this.object.id !== this.object.previous && (
                <Arrow id={this.object.previous} direction="left" />
              )}
            </div>
            <img
              className="image"
              src={this.object.image300}
              alt={this.object.title}
            />
            <div className="painting-link right-arrow">
              {this.object.id !== this.object.next && (
                <Arrow id={this.object.next} direction="right" />
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

function Arrow(props) {
  const icon =
    props.direction === "left"
      ? ["fas", "chevron-left"]
      : ["fas", "chevron-right"];
  return (
    <Link to={props.id.toString()}>
      <FontAwesomeIcon icon={icon} size="2x" style={{ color: "lightgray" }} />
    </Link>
  );
}

export default PaintingDetails;
