import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import "./App.css";
import PaintingDetails from "./components/PaintingDetails";

function App() {
  return (
    <Router>
      
      <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/gallery" className="item">
              Gallery
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>

        <Switch>
          <Redirect exact from="/" to="/gallery" />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/gallery/:paintingId" component={PaintingDetails} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
