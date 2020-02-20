import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";
import { getPaintings, order } from "../images/paintings";
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
    this.updatePaintingsOrder();
  }

  updatePaintingsOrder(width) {
    let order;
    if (this.state.width >= 1200) {
      order = this.order.threecolumns;
    } else if (this.state.width >= 600) {
      order = this.order.twocolumns;
    } else {
      order = this.order.onecolumn;
    }
    this.setState({ order: order });
  }

  render() {
    const thumbnails = this.paintings.map(painting => (
      <Thumbnail key={painting.id} {...painting} />
    ));
    return (
      <div id="gallery">
        {/* <div>{this.state.width}</div> */}
        <div id="thumbnails">{thumbnails}</div>
      </div>
    );
  }
}

export default Gallery;
