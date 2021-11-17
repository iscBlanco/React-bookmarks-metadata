import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

import CardBookmark from "./CardBookmark";
import { getHtml, getHtmlMetadata } from "../container/GetUrlHtml";

function FormUrls() {
  const [card, setCard] = useState();
  const [url, setUrl] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);

  const sendUrl = (event) => {
    event.preventDefault();
    console.log("enviando datos...", url);

    go(url).then((r) =>
      setBookmarkList((bookmarkList) => [...bookmarkList, JSON.stringify(r)])
    );
    console.log("Estado actualizado :" + bookmarkList);
  };

  const go = async (url) => {
    try {
      return getHtmlMetadata(await getHtml(url), url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="md">
      <form className="row form" onSubmit={sendUrl}>
        <div className="col-md-3 form">
          <h5 className="form-url">Insert you URL</h5>
          <input
            type="text"
            placeholder="https://company.com"
            className="form-control"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            name="url"
          />
        </div>

        <button type="primary" className="btn btn-primary form-button">
          Load metadata
        </button>
      </form>
      {bookmarkList.length === 0 ? (
        <h1>reading</h1>
      ) : (
        <CardBookmark
        /*         key={bookmarkList[bookmarkList.length - 1].id}
          image={bookmarkList[bookmarkList.length - 1].image}
          title={bookmarkList[bookmarkList.length - 1].title}
          url={bookmarkList[bookmarkList.length - 1].url}
          description={"description"} */
        />
      )}
    </div>
  );
}

export default FormUrls;
/* 
const urlElems = $("pre.highlight.shell");
for (let i = 0; i < urlElems.length; i++) {
  const urlSpan = $(urlElems[i]).find("span.s1")[0];

  if (urlSpan) {
    const urlText = $(urlSpan).text();
    console.log(urlText);
  }
} */
