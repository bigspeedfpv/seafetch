"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistro = void 0;
var fs_1 = __importDefault(require("fs"));
var getDistro = function () {
    var lines = fs_1.default.readFileSync("/etc/os-release", "utf-8")
        .split("\n")
        .filter(function (value) { return value.includes("PRETTY_NAME"); });
    return lines[0].slice(13, -1);
};
exports.getDistro = getDistro;
