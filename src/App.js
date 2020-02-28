import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Navigation from "./components/Navigation/Navigation";
import PaintingDetails from "./components/PaintingDetails";
import { paintings, getOrder } from "./images/paintings/paintings";
import { tshirts, getTshirtsOrder } from "./images/tshirts/tshirts";
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
                <Gallery objects={paintings} orderFunction={getOrder} />
              )}
            />
            <Route
              exact
              path="/tshirts"
              component={() => (
                <Gallery objects={tshirts} orderFunction={getTshirtsOrder} />
              )}
            />
            <Route path="/gallery/:paintingId" component={PaintingDetails} />
            <Route path="/tshirt/:paintingId" component={PaintingDetails} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
