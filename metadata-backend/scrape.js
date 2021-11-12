import axios from "axios";

import cheerio from "cheerio";

async function getHtml(url) {
  console.log(typeof url);
  const { data: html } = await axios.get(url);
  return html;
}

let getHtmlMetadata = async (html) => {
  const $ = cheerio.load(html);
  const image = $('link[rel="shortcut icon"]').attr("href");
  console.log(image);
};

const getMetatag = (name) =>
  $(`meta[name=${name}]`).attr("content") ||
  $(`meta[property="og:${name}"]`).attr("content") ||
  $(`meta[property="twitter:${name}"]`).attr("content");

export { getHtml, getHtmlMetadata };
