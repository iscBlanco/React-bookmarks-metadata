import React, { useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);
  /* 
  const addNewBookmark = (url) => {
    axios.get(url).then(
      (response) => {
        if (response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          const title = $("title").text();
          const favicon = $('link[rel="shortcut icon"]').attr("href");
          const image = $("img").attr("src");
          setBookmarkList({
            title: title,
            favicon: favicon,
            image: image,
          });
          console.log(`Este es el json agregado : ${bookmarkList[0]}`);
        }
      },
      (e) => console.log(e)
    );
  }; */

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
      <form className="row" onSubmit={sendUrl}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Url"
            className="form-control"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            name="url"
          />
        </div>

        <button type="primary" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default FormUrls;
