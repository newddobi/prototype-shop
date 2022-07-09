const express = require("express");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const fs = require("fs");

console.log(
  ReactDOMServer.renderToString(React.createElement("div", null, "Hello"))
);

const app = express();

app.use(express.static(path.join(__dirname, "docs")));

app.get("/test", (req, res) => {
  const ssr = ReactDOMServer.renderToString(
    React.createElement("div", null, "Hello")
  );
  const indexHtml = fs
    .readFileSync(path.join(__dirname, "docs", "index.html"))
    .toString()
    .replace(`<div id="root"></div>`, `<div id="root">${ssr}</div>`);

  console.log(indexHtml);
  res.send(indexHtml);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

app.listen(9000);
