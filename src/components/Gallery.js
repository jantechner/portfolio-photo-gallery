import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail.js";
import SectionHeader from "./SectionHeader";
import "./Gallery.scss";

function getById(objects, id) {
  const object = objects.find(o => o.id.toString() === id);
  if (!object) {
    return { valid: false };
  } else {
    return { valid: true, ...object };
  }
}

function Gallery(props) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    function updateOrder() {
      const width = window.innerWidth;
      const newOrder = props.orderFunction(
        // width >= 1350 ? 3 : width >= 900 ? 2 : 1
        width >= 1350 ? 3 : 2
      );
      setOrder(newOrder);
    }
    updateOrder();
    window.addEventListener("resize", updateOrder);
    return () => window.removeEventListener("resize", updateOrder);
  }, [props]);

  return (
    <div className="gallery">
      <SectionHeader {...props} />
      {!props.inProgress &&
        order &&
        order.map((column, index) => (
          <div key={index} className="thumbnails-column">
            {column.map(objectId => (
              <Thumbnail
                key={objectId}
                {...getById(props.objects, objectId.toString())}
                showPrice={props.showPrice}
                path={props.path}
              />
            ))}
          </div>
        ))}
      {props.inProgress && <div className="inprogress-info">Podstrona w budowie</div>}
    </div>
  );
}

export default Gallery;
