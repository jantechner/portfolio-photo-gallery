import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { paintings } from "./../images/paintings/paintings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.scss";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={["fas", "chevron-right"]}
        size="1x"
        style={{ color: "lightgray", width: "20px", height: "20px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={["fas", "chevron-left"]}
        size="1x"
        style={{ color: "lightgray", width: "20px", height: "20px" }}
      />
    </div>
  );
}

function Contact(props) {
  const availablePaintings = paintings.filter(p => p.available);

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

  var settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    // centerMode: true,
    variableWidth: true,
    // mobileFirst: true,
    respondTo: "min",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="contact">
        <SectionHeader title="KONTAKT" orderButton={false} />
        <div className="contact-content">
          Witam Cię na mojej stronie! <br />
          <br />
          Moje prace nabierają najpiękniejszych kolorów, <br />
          gdy są wykonywane na indywidualne zamówienie. <br />
          Możesz wybrać obraz, ręcznie malowaną koszulkę, <br />
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
        <SectionHeader title={wrappedTitle} orderButton={false} />
        <div className="slider-box">
          <Slider {...settings}>
            {availablePaintings.map((painting, index) => (
              <div key={index} className="img-box">
                <Link to={`gallery/${painting.id}`}>
                  <img src={painting.image72} alt={painting.title} />
                </Link>
                <div className="price-box">
                  <div className="text">{painting.price} ZŁ</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Contact;
