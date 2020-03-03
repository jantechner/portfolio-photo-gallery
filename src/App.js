import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import OtherProducts from "./components/OtherProducts";
import Navigation from "./components/Navigation/Navigation";
import PaintingDetails from "./components/PaintingDetails";
import {
  paintings,
  getOrder,
  getPaintingById,
  getAdjacentPaintingsId
} from "./images/paintings/paintings";
import {
  tshirts,
  getTshirtsOrder,
  getTshirtById,
  getAdjacentTshirtsId
} from "./images/tshirts/tshirts";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Redirect exact from="/" to="/gallery" />
            <Route
              exact
              path="/gallery"
              component={() => (
                <Gallery
                  objects={paintings}
                  orderFunction={getOrder}
                  title="OBRAZY"
                  orderButton={true}
                />
              )}
            />
            <Route
              path="/gallery/:id"
              render={props => (
                <PaintingDetails
                  {...props}
                  get={getPaintingById}
                  adj={getAdjacentPaintingsId}
                />
              )}
            />
            <Route
              exact
              path="/tshirts"
              component={() => (
                <Gallery
                  objects={tshirts}
                  orderFunction={getTshirtsOrder}
                  title="KOSZULKI"
                  orderButton={true}
                />
              )}
            />

            <Route
              path="/tshirts/:id"
              render={props => (
                <PaintingDetails
                  {...props}
                  get={getTshirtById}
                  adj={getAdjacentTshirtsId}
                />
              )}
            />
            <Route path="/others" component={OtherProducts} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/order" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
