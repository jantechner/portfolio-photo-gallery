import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";
import { getPaintings, order, getPaintingById } from "../images/paintings";
import "./Gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.paintings = getPaintings();
    this.order = order;
    this.state = { windowWidth: 0, order: null };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.updatePaintingsOrder = this.updatePaintingsOrder.bind(this);
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({ width: window.innerWidth });
    this.updatePaintingsOrder(window.innerWidth);
  }

  updatePaintingsOrder(width) {
    let order;
    if (width >= 1350) {
      order = this.order.threecolumns;
    } else if (width >= 900) {
      order = this.order.twocolumns;
    } else {
      order = this.order.onecolumn;
    }
    this.setState({ order: order });
  }

  render() {
    return (
      <div id="gallery">
        {this.state.order &&
          this.state.order.map((column, index) => (
            <div key={index} className="thumbnails-column">
              {column.map(paintingId => (
                <Thumbnail
                  key={paintingId}
                  {...getPaintingById(paintingId.toString())}
                />
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default Gallery;
