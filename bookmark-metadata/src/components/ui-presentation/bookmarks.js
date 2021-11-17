import React from "react";
import urlList from "../container/urlList";
import CardBookmark from "./CardBookmark";

function Bookmarks() {
  console.log(`tipo de id ${typeof urlList[0].id}`);
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
      <div className="container cards">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {bookmarkElements}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
