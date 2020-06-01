var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
var app = express();
let PORT = 3002;

const StaticDir = '../../www'
let Path = path.join(__dirname, StaticDir)
Path = path.resolve(Path)
console.log("Serving static pages on port:", PORT);
console.log("Serving Dir :", Path);
app.use(serveStatic(Path));
app.listen(PORT);