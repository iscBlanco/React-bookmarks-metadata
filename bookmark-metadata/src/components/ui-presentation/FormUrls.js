import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

import CardBookmark from "./CardBookmark";

function FormUrls() {
  const [card, setCard] = useState();
  const [url, setUrl] = useState("");
  const [bookmarkObj, setBookmarkObj] = useState({
    id: 0,
    title: "",
    favicon: "",
    image: "",
    url: "",
    description: "",
  });
  const [bookmarkList, setBookmarkList] = useState([]);

  async function getHtml(url) {
    const { data: html } = await axios.get(url);

    return html;
  }

  let getHtmlMetadata = async (html, url) => {
    try {
      const $ = await cheerio.load(html);
      const metaObj = [];
      let title = $("title")
        .text()
        .replace(/1Asset/g, "")
        .replace(/Asset/g, "")
        .trim();
      const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");
      title = removeExtraSpace(title);
      console.log(`El valor de title es: ${title} y es ${typeof title}`);
      let description = $(
        'p[class="hidden md:block font-rubik text-base text-surface-600 leading-loose"]'
      ).html();

      description = removeExtraSpace(description);
      console.log(
        `El valor de description es: ${description} y es ${typeof description}`
      );
      let favicon = $('link[rel="apple-touch-icon"]').attr("href");
      if (favicon === undefined) {
        favicon = "not found";
      }
      /* NEED SOME REFACTOR */
      console.log(`El valor de favicon es: ${favicon} y es ${typeof favicon}`);
      /*  const image = $("img").attr("src"); */

      let image = $(
        "div.absolute.bottom-0.right-0.lg\\:mr-15.-mb-3.lg\\:-mb-13.h-48.w-40.lg\\:h-73.lg\\:w-60.rounded-8px > picture > img"
      ).attr("data-src");
      /* image = JSON.parse(image); */
      console.log(`El valor de image es: ${image} y es ${typeof image}`);
      console.log(`tipo de variable de tamaño ${typeof bookmarkList.length}`);
      metaObj.push({
        id: bookmarkList.length,
        title: title,
        favicon: favicon,
        image: image,
        url: url,
        description: description,
      });

      console.log(`Objeto con push : ${JSON.stringify(metaObj)}`);

      return JSON.stringify(metaObj);
    } catch (error) {
      console.log(error);
    }
  };

  const sendUrl = (event) => {
    event.preventDefault();
    console.log("enviando datos...", url);

    go(url).then((r) => {
      setBookmarkObj({
        ...bookmarkObj,
        title: r.title,
      });

      setBookmarkList((bookmarkList) => [...bookmarkList, JSON.stringify(r)]);
    });
    console.log("Estado actualizado :" + bookmarkList);
    console.log("este es el json chingon" + bookmarkObj.title);
  };

  const go = async (url) => {
    try {
      return getHtmlMetadata(await getHtml(url), url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setCard();
  }, [bookmarkObj]);

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
          key={bookmarkObj.id}
          image={bookmarkObj.image}
          title={bookmarkObj.title}
          url={bookmarkObj.url}
          description={bookmarkObj.description}
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
