import axios from "axios";

import cheerio from "cheerio";

async function getHtml(url) {
  const { data: html } = await axios.get(url);
  return html;
}

let getHtmlMetadata = async (html) => {
  const $ = cheerio.load(html);
  const title = $("title").text();
  const favicon = $('link[rel="shortcut icon"]').attr("href");
  const image = $("img").attr("src");
  return { title: title, favicon: favicon, image: image };
};

const getMetatag = (name) =>
  $(`meta[name=${name}]`).attr("content") ||
  $(`meta[property="og:${name}"]`).attr("content") ||
  $(`meta[property="twitter:${name}"]`).attr("content");

export { getHtml, getHtmlMetadata };
