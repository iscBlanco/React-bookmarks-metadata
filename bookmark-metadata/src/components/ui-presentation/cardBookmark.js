import React from "react";

function CardBookmark({ image, title, url, description }) {
  return (
    <div className="col">
      <div>
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            alt="..."
            height="220px"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{url}</p>
            <h6 className="card-text">{description}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBookmark;
