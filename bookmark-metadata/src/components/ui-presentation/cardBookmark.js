import React from "react";

function CardBookmark({ image, title, url, description }) {
  const styleComponent = {
    width: " 16rem",
    height: "25rem",
  };
  return (
    <div>
      <div className="card" style={styleComponent}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          height="220px"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{url}</p>
          <h6>{description}</h6>
        </div>
      </div>
    </div>
  );
}

export default CardBookmark;
