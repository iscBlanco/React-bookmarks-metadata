import React from "react";
import urlList from "../container/urlList";
import CardBookmark from "./CardBookmark";
function Bookmarks() {
  const bookmarkElements = urlList.map((url) => {
    return (
      <CardBookmark
        key={url.id}
        image={url.image}
        title={url.title}
        url={url.url}
        description={url.description}
      />
    );
  });
  return (
    <div>
      <nav className="nav nav-pills nav-fill">
        <h1 className="nav-link disabled">My bookmarks</h1>
        {/* eslint-disable-next-line */}

        <button type="button" className="btn btn-primary">
          Add new bookmark
        </button>
      </nav>
      <div>{bookmarkElements}</div>
    </div>
  );
}

export default Bookmarks;
