import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import SectionHeader from "./SectionHeader";
import { paintings, getOrderAvailable } from "./../images/paintings/paintings";
import "./Contact.scss";

function Contact(props) {
  const availablePaintings = paintings.filter(p => p.available);
  console.log(availablePaintings);

  const [wrappedTitle, setWrappedTitle] = useState(
    window.innerWidth < 420 ? (
      <div>
        DOSTĘPNE
        <br />
        OBRAZY
      </div>
    ) : (
      "DOSTĘPNE OBRAZY"
    )
  );
  useEffect(() => {
    function handleResize() {
      setWrappedTitle(
        window.innerWidth < 420 ? (
          <div>
            DOSTĘPNE
            <br />
            OBRAZY
          </div>
        ) : (
          "DOSTĘPNE OBRAZY"
        )
      );
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="contact">
        <SectionHeader title="KONTAKT" orderButton={false} />
        <div className="contact-content">
          Witam Cię na mojej stronie! <br />
          <br />
          Moje prace nabierają najpiękniejszych kolorów, <br />
          gdy są wykonywane na indywidualne zamówienie. <br />
          Możesz wybrać obraz, ręcznie malowaną koszulkę, <br/>
          zaproszenie lub inne produkty. <br />
          <br />
          Zamów pisząc na adres:
          <br />
          <b>malgorzata.techner@gmail.com</b> <br />
          lub wejdź na stronę 
          <br />
          <a href="https://www.facebook.com/MalgorzataTechner/">
            <b>facebook.com/MalgorzataTechner</b>
          </a>
          <br />
          <br />
          Jeśli wolisz, możesz też wybrać spośród <br />
          gotowych prac.
        </div>
      </div>
      <Gallery
        objects={availablePaintings}
        orderFunction={getOrderAvailable}
        title={wrappedTitle}
        orderButton={false}
      />
    </div>
  );
}

export default Contact;
