import React, { useState, useEffect } from "react";

import CardBookmark from "./CardBookmark";
import { getHtml, getHtmlMetadata } from "../container/GetUrlHtml";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [urlFromButton, setUrlFromButton] = useState("");
  const [urlFromEffect, setUrlFromEffect] = useState("");
  const [html, setHtml] = useState("");

  const [bookmarkList, setBookmarkList] = useState({
    title: "",
    favicon: "",
    image: "",
    url: "",
    description: "",
  });

  const sendUrl = (event) => {
    event.preventDefault();
    setHtml("");
    setUrlFromButton(url);
    console.log("enviando datos...", url);
    setUrl("");
  };

  const cancelUrlInput = () => {
    document.getElementById("url-form").reset();
  };

  useEffect(() => {
    if (urlFromButton !== "") {
      getHtml(urlFromButton)
        .then((res) => {
          /* console.log(res); */
          setHtml(res);
          setUrlFromEffect(urlFromButton);
          setUrlFromButton("");
          cancelUrlInput();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
    }
  }, [url, urlFromButton]);

  useEffect(() => {
    console.log(
      `Html : ${html}: ++++ html tipo ++++ ${typeof html}, url : ${urlFromEffect}`
    );
    if (html !== "") {
      getHtmlMetadata(html, urlFromEffect)
        .then((r) => {
          setBookmarkList({ ...bookmarkList, ...JSON.stringify(r) });
          console.log("+++++  RESPUESTA  :  ++++" + JSON.stringify(r));
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html, urlFromButton, urlFromEffect]);

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
      <form className="row form" id="url-form" onSubmit={sendUrl}>
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

        <button
          /*  disabled={html} */
          type="primary"
          className="btn btn-primary form-button"
        >
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
