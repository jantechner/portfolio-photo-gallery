import React from "react";
import AboutImage1 from "./../images/about1.jpg";
import AboutImage2 from "./../images/about2.jpg";
import "./About.scss";

function About(props) {
  return (
    <div className="about">
      <span className="title">O MNIE</span>
      <div className="about-images">
        <img src={AboutImage1} alt={"O mnie - zdjęcie 1"} />
        <img src={AboutImage2} alt={"O mnie - zdjęcie 2"} />
      </div>
      <div className="description">
        Nazywam się Małgorzata Techner. Studiuję architekturę na Uniwerytecie
        Artystycznym w Poznaniu. Pasję malarską odkryłam w wieku 15 lat. Od tego
        czasu rozwijam swoje umiejętności poprzez uczestnictwo w plenerach i
        warszatatch artystycznych. W moich obrazach znajdziecie dużo światła i
        ciepłych kolorów, ponieważ malując chcę pomnażać dobro i motywować do
        pozytywnego patrzenia na rzeczywistość. Każdy z nich zawiera cząstkę
        mojej duszy. Zresztą nie tylko obrazy. Na stronie znajdziecie również
        ręcznie malowane koszulki i akwarelowe wianki z cytatami.
      </div>
    </div>
  );
}

export default About;
