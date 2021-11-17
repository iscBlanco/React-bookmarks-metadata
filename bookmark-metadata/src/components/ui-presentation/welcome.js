import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to Marko</h1>
      <br></br>
      <div className="paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <br></br>
      <Link to="/form">
        <button type="button" className="btn btn-primary">
          Add new bookmark
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
