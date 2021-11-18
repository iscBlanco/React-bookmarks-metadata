import React, { useState, useEffect } from "react";

import CardBookmark from "./CardBookmark";
import { getHtml, getHtmlMetadata } from "../container/GetUrlHtml";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [urlFromButton, setUrlFromButton] = useState("");
  const [hola, setHola] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);
  const [bookmarkObj, setBookmarkObj] = useState({});
  /* title: "",
    favicon: "",
    image: "",
    url: "",
    description: "", */
  const sendUrl = (event) => {
    event.preventDefault();

    setUrlFromButton(url);
    console.log("enviando datos...", url);
    setUrl("");
  };

  const cancelUrlInput = () => {
    document.getElementById("url-form").reset();
  };

  const go = async (url) => {
    try {
      return getHtmlMetadata(await getHtml(url), url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (urlFromButton !== "") {
      go(urlFromButton).then((r) => {
        setBookmarkObj((prevState) => {
          return { ...prevState, ...r };
        });

        setBookmarkList((bookmarkList) => [...bookmarkList, JSON.stringify(r)]);
      });

      console.log("Estado actualizado :" + bookmarkList);
      console.log("este es el json TITLE" + bookmarkObj.title);
      console.log("este es el json IMAGE" + bookmarkObj.image);
      console.log("este es el json FAVICON" + bookmarkObj.favicon);
      console.log("este es el json DESCRIPTION" + bookmarkObj.description);
      /* cancelUrlInput(); */
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlFromButton]);

  useEffect(() => {
    setHola(<h1>hola</h1>);
  }, [bookmarkObj]);

  function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
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
      {isEmpty(bookmarkObj) ? (
        <h1>No elements</h1>
      ) : (
        <>
          <form className="row form" id="url-form" onSubmit={sendUrl}>
            <div className="card-form">
              <CardBookmark
                title={bookmarkObj.title}
                favicon={bookmarkObj.favicon}
                image={bookmarkObj.image}
                url={bookmarkObj.url}
                description={bookmarkObj.description}
              />
            </div>

            <button
              /*  disabled={html} */
              type="primary"
              className="btn btn-primary form-button"
            >
              SAVE BOOKMARK
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default FormUrls;

// useEffect(() => {
//   if (urlFromButton !== "") {
//     getHtml(urlFromButton)
//       .then((res) => {
//         /* console.log(res); */
//         setHtml(res);
//         setUrlFromEffect(urlFromButton);
//         setUrlFromButton("");
//         cancelUrlInput();
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   } else {
//   }
// }, [url, urlFromButton]);

// useEffect(() => {
//   console.log(
//     `Html : ${html}: ++++ html tipo ++++ ${typeof html}, url : ${urlFromEffect}`
//   );
//   if (html !== "") {
//     getHtmlMetadata(html, urlFromEffect)
//       .then((r) => {
//         setBookmarkList({ ...bookmarkList, ...JSON.stringify(r) });
//         console.log("+++++  RESPUESTA  :  ++++" + JSON.stringify(r));
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [html, urlFromButton, urlFromEffect]);
