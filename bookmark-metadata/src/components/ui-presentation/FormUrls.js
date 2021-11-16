import React, { useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

import MetaPreview from "./MetaPreview";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);

  async function getHtml(url) {
    const { data: html } = await axios.get(url);
    return html;
  }

  let getHtmlMetadata = async (html) => {
    const $ = await cheerio.load(html);
    const title = $("title").text();
    const favicon = $('link[rel="shortcut icon"]').attr("href");
    const image = $("img").attr("src");
    return { title: title, favicon: favicon, image: image };
  };

  const sendUrl = (event) => {
    event.preventDefault();
    console.log("enviando datos...", url);

    go(url).then((r) => setBookmarkList(r));
    console.log(bookmarkList);
  };

  const go = async (url) => {
    return getHtmlMetadata(await getHtml(url));
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
      <MetaPreview></MetaPreview>
    </div>
  );
}

export default FormUrls;
