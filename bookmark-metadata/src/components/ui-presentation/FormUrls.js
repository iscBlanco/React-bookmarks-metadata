import React, { useState, useEffect } from "react";
import { getHtml, getHtmlMetadata } from "../container/GetUrlHtml";

import CardBookmark from "./CardBookmark";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [urlFromButton, setUrlFromButton] = useState("");
  const [bookmarkObj, setBookmarkObj] = useState({});
  const [bookmarkList, setBookmarkList] = useState([{}]);

  const sendUrl = (event) => {
    event.preventDefault();
    setBookmarkList([{}]);
    setBookmarkObj({});
    setUrlFromButton(url);
    setUrl("");
    go(url).then((r) => setBookmarkObj(r));
    console.log("Estado actualizado :" + bookmarkObj);
  };

  const go = async (url) => {
    try {
      let hola = getHtmlMetadata(getHtml(url), url, 1);
      return hola;
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   go(urlFromButton)
  //     .then((r) => {
  //       setBookmarkObj(r);
  //       console.log(`Este es el chingon ${r}`);
  //       /*  setBookmarkList((bookmarkList) => [...bookmarkList, JSON.stringify(r)]) */
  //     })
  //     .catch((e) => console.log(e));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [urlFromButton]);

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
      {bookmarkObj.length === 0 ? (
        <h1>reading</h1>
      ) : (
        <CardBookmark
          key={1}
          id={bookmarkObj.id}
          image={bookmarkObj.image}
          url={bookmarkObj.url}
          title={bookmarkObj.title}
          description={bookmarkObj.description}
        />
      )}
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
