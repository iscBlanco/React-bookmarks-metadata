import React, { useState, useEffect } from "react";
import { getHtml, getHtmlMetadata } from "../container/GetUrlHtml";
import { Link } from "react-router-dom";
import CardBookmark from "./CardBookmark";

function FormUrls({ list, functionList }) {
  const [url, setUrl] = useState("");
  const [urlFromButton, setUrlFromButton] = useState("");

  const [bookmarkList, setBookmarkList] = useState([]);
  const [bookmarkObj, setBookmarkObj] = useState({});
  /* title: "",
    favicon: "",
    image: "",
    url: "",
    description: "", */

  const saveObj = () => {
    console.log(`tipo de list : ${list}`);

    console.log(`tipo bookmark ${typeof bookmarkObj}`);
    const metaObj = [];
    metaObj.push({
      title: bookmarkObj.title,
      favicon: bookmarkObj.favicon,
      image: bookmarkObj.image,
      url: bookmarkObj.url,
      description: bookmarkObj.description,
    });
    console.log(`type de meta obj ${metaObj}`);
    functionList((prevList) => [...prevList, bookmarkObj]);
    /*     setBookmarkList((bookmarkList) => [...bookmarkList, JSON.stringify(r)]); */

    console.log(list);

    /* setBookmarkObj({ ...bookmarkObj, ...{} });
      console.log("Objeto borrado..." + bookmarkObj.title); */
  };
  const sendUrl = (event) => {
    if (url) {
      event.preventDefault();

      setUrlFromButton(url);
      console.log("enviando datos...", url);
      setUrl("");
    }
  };

  const cancelUrlInput = () => {
    document.getElementById("url-form").reset();
  };

  const go = async (url) => {
    try {
      return await getHtmlMetadata(await getHtml(url), url, 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (urlFromButton) {
      go(urlFromButton).then((r) => {
        setBookmarkObj((prevState) => {
          return { ...prevState, ...r };
        });
      });

      console.log("Estado actualizado :" + bookmarkList);
      console.log("este es el json TITLE" + bookmarkObj.title);
      console.log("este es el json IMAGE" + bookmarkObj.image);
      console.log("este es el json FAVICON" + bookmarkObj.favicon);
      console.log("este es el json DESCRIPTION" + bookmarkObj.description);
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlFromButton]);

  /*  useEffect(() => {
    if (bookmarkObj) {
      debugger;
      cancelUrlInput();
    }
  }, [bookmarkObj]); */

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
          {/*  <form className="row form" id="url-form" onSubmit={saveObj}> */}
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
            onClick={saveObj}
          >
            SAVE BOOKMARK
          </button>
        </>
      )}
      <Link to="/bookmarks">
        <h4>My bookmarks</h4>
      </Link>
    </div>
  );
}

export default FormUrls;
/*
 */
/* 
const urlElems = $("pre.highlight.shell");
for (let i = 0; i < urlElems.length; i++) {
  const urlSpan = $(urlElems[i]).find("span.s1")[0];

  if (urlSpan) {
    const urlText = $(urlSpan).text();
    console.log(urlText);
  }
} */
/* 
1 sacar las funciones
++++DONE+++

2 en la funcion que se dispara cuando obtenemos la url
settear la url y este set activa useEffect
+++DONE+++++

3 en useEffect llamamos las funciones para obtener html mandando por parametro la url
y tambien llamamos la funcion que va obtener los datos del html

4 variables que vamos a utilizar son para el objeto, para el
arreglo, para la url esta se setea en el input, crear variable urlFromBotton


5 ver como desplegar los datos  


*/

/*  

  const sendUrl = (event) => {
    event.preventDefault();
    console.log("enviando datos...", url);

    go(url).then((r) =>
      console.log("Estado actualizado :" + JSON.stringify(r))
    );
  };


const go = async (url) => {
    try {
      return getHtmlMetadata(await getHtml(url), url);
    } catch (e) {
      console.log(e);
    }
  }; */
