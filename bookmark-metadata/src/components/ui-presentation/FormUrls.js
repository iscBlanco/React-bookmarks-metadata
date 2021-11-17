import React, { useState, useEffect, createRef } from "react";

import CardBookmark from "./CardBookmark";
import { getHtml, getHtmlMetadata } from "../container/GetUrlHtml";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [urlFromButton, setUrlFromButton] = useState("");
  const [html, setHtml] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);

  const sendUrl = (event) => {
    event.preventDefault();

    setHtml("");
    setUrlFromButton(url);
    setUrl("");
    console.log("enviando datos...", url);
  };

  useEffect(() => {
    getHtml(url)
      .then((res) => {
        console.log(res);
        setHtml(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url, urlFromButton]);

  /*    go(url).then((r) =>
      setBookmarkList((bookmarkList) => [...bookmarkList, JSON.stringify(r)])
    );
    console.log("Estado actualizado :" + bookmarkList);
  }; */

  /* const go = async (url) => {
    try {
      return getHtmlMetadata(await getHtml(url), url);
    } catch (e) {
      console.log(e);
    }
  };
 */

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
