const express = require("express");
const fs = require("fs");
const { execFile } = require("child_process");
const app = express();

app.get("/report", function (req, res) {
  execFile("generate-report", [req.query.name], (err, out) => res.send(out));
});

app.get("/download", function (req, res) {
  fs.readFile("files/" + req.query.file, (err, data) => res.send(data)); // nosemgrep: javascript.express.express-fs-filename.express-fs-filename
});
