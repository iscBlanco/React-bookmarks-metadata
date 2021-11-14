import express from "express";
import bodyParser from "body-parser";
import { getHtml, getHtmlMetadata } from "./scrape";
const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post("/", (req, res) => {
  let url = req.body;
  go(url).then((r) => res.send(r));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const go = async (url) => {
  return getHtmlMetadata(await getHtml(url));
};
