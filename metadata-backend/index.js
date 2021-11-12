import express from "express";
import bodyParser from "body-parser";
import { getHtml, getHtmlMetadata } from "./scrape";
const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post("/", (req, res) => {
  let url = req.body;
  res.send(url);
  go(url);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const go = async (url) => {
  getHtmlMetadata(await getHtml(url));
};
