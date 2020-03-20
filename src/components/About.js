import React from "react";
import AboutImage1 from "./../images/about/omnie1.jpg";
import AboutImage2 from "./../images/about/omnie2.jpg";
import AboutImage3 from "./../images/about/omnie3.jpg";
import AboutImage4 from "./../images/about/omnie4.jpg";
import AboutImage5 from "./../images/about/omnie5.jpg";
import SectionHeader from "./SectionHeader";
import "./About.scss";

function About(props) {
  return (
    <div className="about">
      <SectionHeader title="O MNIE" orderButton={false}/>
      {/* <div style={{height: 20}}></div> */}
      <img src={AboutImage1} alt={"O mnie - zdjęcie 1"} />
      <div className="description">
        Jestem studentką architektury na Uniwersytecie Artystycznym w Poznaniu,
        a moją największą pasją jest malarstwo. Od lat biorę udział w plenerach,
        warsztatach artystycznych i tworzę obrazy, które możecie obejrzeć na tej
        stronie. Znajdziecie w nich dużo światła i ciepłych kolorów. Być może
        zauważycie, że inspiruje mnie blask słońca, taniec i radość. Dzieła,
        które tworzę, mogą czasem budzić uczucie nostalgii, ale prawie nigdy nie
        bywają smutne – znajdziecie w nich raczej powiew wiatru, delikatność lub
        zatrzymane malarskim pędzlem wspomnienia. Każde z nich zawiera cząstkę
        mojej duszy.
      </div>
      <img src={AboutImage2} alt={"O mnie - zdjęcie 2"} />
      <div className="description">
        Chciałabym, by oglądający moje obrazy odkrywali piękno
        życia i umieli z wdzięcznością patrzeć na rzeczywistość. Mam nadzieję,
        że w ten sposób pomnażamy dobro - do tego serdecznie Was zapraszam swoją
        twórczością. Oprócz obrazów, znajdziecie też ręcznie malowane koszulki,
        akwarelowe wianki z cytatami i inne personalizowane projekty.
      </div>
      <img src={AboutImage3} alt={"O mnie - zdjęcie 3"} />
      <img src={AboutImage4} alt={"O mnie - zdjęcie 4"} />
      <img src={AboutImage5} alt={"O mnie - zdjęcie 5"} />
      <div className="description">
        Dziękuję Wam za odwiedziny. Mam nadzieję, że pozostaniecie ze mną dłużej :)
      </div>
    </div>
  );
}

export default About;
