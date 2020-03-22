import React, { useEffect } from "react";
import Gallery from "./Gallery";
import { paintings, getOrder } from "./../images/paintings/paintings";

export default function MainGallery(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Gallery
      objects={paintings}
      orderFunction={getOrder}
      title="OBRAZY"
      orderButton={true}
    />
  );
}
