import axios from "axios";
import cheerio from "cheerio";

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
    // console.log("ESTE ES EL TITTLE" + title);
    const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");
    title = removeExtraSpace(title);
    // console.log(`El valor de title es: ${title} y es ${typeof title}`);
    let description = $(
      'p[class="hidden md:block font-rubik text-base text-surface-600 leading-loose"]'
    ).html();

    description = removeExtraSpace(description);
    // console.log(
    // `El valor de description es: ${description} y es ${typeof description}`
    // );
    let favicon = $('link[rel="apple-touch-icon"]').attr("href");
    if (favicon === undefined) {
      favicon = "not found";
    }
    /* NEED SOME REFACTOR */
    // console.log(`El valor de favicon es: ${favicon} y es ${typeof favicon}`);
    /*  const image = $("img").attr("src"); */

    let image = $(
      "div.absolute.bottom-0.right-0.lg\\:mr-15.-mb-3.lg\\:-mb-13.h-48.w-40.lg\\:h-73.lg\\:w-60.rounded-8px > picture > img"
    ).attr("data-src");
    /* image = JSON.parse(image); */
    // console.log(`El valor de image es: ${image} y es ${typeof image}`);

    metaObj.push({
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

export { getHtml, getHtmlMetadata };
