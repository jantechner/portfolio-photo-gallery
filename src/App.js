import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Navigation from "./components/Navigation";
import "./App.css";
import PaintingDetails from "./components/PaintingDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
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
