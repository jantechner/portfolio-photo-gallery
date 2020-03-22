import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import OtherProducts from "./components/OtherProducts";
import Navigation from "./components/Navigation/Navigation";
import PaintingDetails from "./components/PaintingDetails";
import {
  getPaintingById,
  getAdjacentPaintingsId
} from "./images/paintings/paintings";
import { getTshirtById, getAdjacentTshirtsId } from "./images/tshirts/tshirts";
import {
  getExhibitionById,
  getAdjacentExhibitionsId
} from "./images/exhibitions/exhibitions";
import {
  getProjectById,
  getAdjacentProjectsId
} from "./images/projects/projects";
import { getBookById, getAdjacentBooksId } from "./images/books/books";
import "./App.scss";
import MainGallery from "./components/MainGallery";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Redirect exact from="/" to="/gallery" />
            {/* <Route
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
            /> */}
            <Route
              exact
              path="/gallery"
              component={MainGallery}
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
              path="/tshirts/:id"
              render={props => (
                <PaintingDetails
                  {...props}
                  get={getTshirtById}
                  adj={getAdjacentTshirtsId}
                />
              )}
            />
            <Route
              path="/exhibitions/:id"
              render={props => (
                <PaintingDetails
                  {...props}
                  get={getExhibitionById}
                  adj={getAdjacentExhibitionsId}
                />
              )}
            />
            <Route
              path="/projects/:id"
              render={props => (
                <PaintingDetails
                  {...props}
                  get={getProjectById}
                  adj={getAdjacentProjectsId}
                />
              )}
            />
            <Route
              path="/books/:id"
              render={props => (
                <PaintingDetails
                  {...props}
                  get={getBookById}
                  adj={getAdjacentBooksId}
                />
              )}
            />
            <Route extact path="/others" component={OtherProducts} />
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
