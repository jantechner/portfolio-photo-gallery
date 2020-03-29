import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingIndicator from "./../images/loading.gif";
import Img from "react-image";
import "./PaintingDetails.scss";

function PaintingDetails(props) {
  const [object, setObject] = useState(
    fetchObject(props.get, props.adj, props.match.params.id)
  );
  const [loaded, setLoaded] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [redirect, setRedirect] = useState({ redirect: false });

  function fetchObject(get, adj, id) {
    return {
      ...get(id),
      ...adj(id)
    };
  }

  useEffect(() => {
    setRedirect({ redirect: false });
    const o = fetchObject(props.get, props.adj, props.match.params.id);
    setObject(o);
    fetch(o.image300)
      .then(response => response.blob())
      .then(image => {
        setImageURL(URL.createObjectURL(image));
        setLoaded(true);
      });
  }, [props.match.params.id, props.get, props.adj]);

  useEffect(() => {
    function keyHandling(e) {
      if (e.keyCode === 37 && object.previous !== object.id) {
        redirectTo(object.previous);
      } else if (e.keyCode === 39 && object.next !== object.id) {
        redirectTo(object.next);
      }
    }
    window.addEventListener("keyup", keyHandling);
    return () => window.removeEventListener("keyup", keyHandling);
  }, [object.next, object.previous, object.id]);

  function redirectTo(destination) {
    setLoaded(false);
    setRedirect({ redirect: true, to: destination });
  }

  if (redirect.redirect) {
    return <Redirect push to={`${redirect.to}`} />;
  }

  if (!object.valid) {
    return <h1>No such painting</h1>;
  } else {
    return (
      <div className="painting-details">
        {object.size && (
          <div className="description">
            <span className="title">{object.title}</span>
            <span>
              {object.size[0] + "x" + object.size[1] + ", " + object.technique}
            </span>
            <span>{"rok " + object.year}</span>
          </div>
        )}

        <div className="image-navigation-wrapper">
          <Arrow
            id={object.previous}
            direction="left"
            redirectTo={redirectTo}
            display={object.id !== object.previous}
          />

          {loaded && <Img src={imageURL} className="image" alt="image" />}

          {!loaded && (
            <img src={LoadingIndicator} className="indicator" alt="loading" />
          )}

          <Arrow
            id={object.next}
            direction="right"
            redirectTo={redirectTo}
            display={object.id !== object.next}
          />
        </div>
      </div>
    );
  }
}

function Arrow(props) {
  const icon =
    props.direction === "left"
      ? ["fas", "chevron-left"]
      : ["fas", "chevron-right"];
  return (
    <div
      className={`painting-link ${props.direction}-arrow`}
      onClick={props.display ? () => props.redirectTo(props.id) : () => {}}
    >
      {props.display && (
        <FontAwesomeIcon icon={icon} size="2x" style={{ color: "lightgray" }} />
      )}
    </div>
  );
}

export default PaintingDetails;
