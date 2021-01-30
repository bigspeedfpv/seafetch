"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUptime = exports.getWMDE = exports.getKernel = exports.getDistro = void 0;
var fs_1 = __importDefault(require("fs"));
var execa_1 = __importDefault(require("execa"));
var magenta = "\x1b[35m";
var white = "\x1b[37m";
var getDistro = function () {
    var lines = fs_1.default.readFileSync("/etc/os-release", "utf-8")
        .split("\n")
        .filter(function (value) { return value.includes("PRETTY_NAME"); });
    return magenta + "OS: " + white + lines[0].slice(13, -1);
};
exports.getDistro = getDistro;
var getKernel = function () {
    var kernel = execa_1.default.sync("uname", ["-r"]);
    return magenta + "Kernel: " + white + kernel.stdout;
};
exports.getKernel = getKernel;
var getWMDE = function () {
    var de = process.env.XDG_DESKTOP_SESSION || process.env.XDG_CURRENT_DESKTOP || process.env.XDG_DESKTOP_SESSION || "Unable to find WM/DE.";
    return magenta + "WM/DE: " + white + de;
};
exports.getWMDE = getWMDE;
var getUptime = function () {
    var prettyUptime = "Unable to find uptime.";
    var uptime = fs_1.default.readFileSync("/proc/uptime", "utf-8");
    if (uptime) {
        var total = parseInt(uptime.split(".")[0]);
        var days = Math.floor(total / (24 * 3600));
        total -= days * (24 * 3600);
        var hours = Math.floor((total % (24 * 3600)) / 3600);
        total -= hours * 3600;
        var mins = Math.floor(total / 60);
        prettyUptime = "" + (days != 0 ? days + " day" + (days != 1 ? "s" : "") + ", " : "") + (hours != 0 ? hours + " hour" + (hours != 1 ? "s" : "") + ", " : "") + mins + " minutes";
    }
    return magenta + "Uptime: " + white + prettyUptime;
};
exports.getUptime = getUptime;
