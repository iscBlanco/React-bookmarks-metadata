import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getHtml, getHtmlMetadata } from "./scrape";
const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.text());

app.post("/", (req, res) => {
  const url = res.json({ requestBody: req.body });
  /* console.log(`tipo de url ${typeof url}, valor de url ${url}`);
  go(url).then((r) => res.send(r)); */
  console.log(url);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const go = async (url) => {
  return getHtmlMetadata(await getHtml(url));
};
