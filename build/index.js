"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./specs");
var specs_1 = require("./specs");
var art_1 = require("./art");
var distro = "Ubuntu";
var art = art_1.getArt(distro);
var info = [
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro(),
    specs_1.getDistro()
];
var artLines = art.split("\n");
var longestLine = Math.max.apply(Math, (artLines.map(function (el) { return el.length; })));
var sep = " ".repeat(longestLine - 9);
for (var i in (artLines.length > info.length ? artLines : info)) {
    var artLine = artLines[i] || sep;
    var infoLine = info[i] || "";
    var line = artLine + "\x1b[37m\t" + infoLine;
    console.log(line);
}
