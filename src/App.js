import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">
              Gallery
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
        <Route exact path="/" component={Gallery} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
