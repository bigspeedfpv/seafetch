"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArt = void 0;
var chalk_1 = __importDefault(require("chalk"));
var getArt = function (distro) {
    var art = "";
    if (distro.includes("Arch"))
        art = archLinux;
    else if (distro.includes("Manjaro"))
        art = manjaro;
    else if (distro.includes("Ubuntu"))
        art = ubuntu;
    else if (distro.includes("Void"))
        art = voidLinux;
    return art;
};
exports.getArt = getArt;
var archLinux = chalk_1.default.blue("                  \u2584                  \n                 \u259F\u2588\u2599                 \n                \u259F\u2588\u2588\u2588\u2599                \n               \u259F\u2588\u2588\u2588\u2588\u2588\u2599               \n              \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599              \n             \u2582\u2594\u2580\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2599             \n            \u259F\u2588\u2588\u2585\u2582\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2599            \n           \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599           \n          \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599          \n         \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599         \n        \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599        \n       \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u259B\u2580\u2580\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599       \n      \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u259B      \u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599      \n     \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599     \n    \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2586\u2585\u2584\u2583\u2582    \n   \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u259B        \u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2599   \n  \u259F\u2588\u2588\u2588\u2588\u2588\u2588\u2580\u2580\u2580              \u2580\u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2599  \n \u259F\u2588\u2588\u2588\u2580\u2598                       \u259D\u2580\u2588\u2588\u2588\u2599 \n\u259F\u259B\u2580                               \u2580\u259C\u2599");
var manjaro = chalk_1.default.green("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
var ubuntu = "\u001B[33m                          ./+o+-       \n\u001B[33m                  yyyyy- -yyyyyy+    \n\u001B[33m               ://+//////-yyyyyyo  \n\u001B[33m           .++ .:/++++++/-.+sss/` \n\u001B[33m         .:++o:  /++++++++/:--:/-     \n\u001B[33m        o:+o+:++.`..```.-/oo+++++/    \n\u001B[33m       .:+o:+o/.          `+sssoo+/    \n\u001B[33m  .++/+:+oo+o:`             /sssooo.\n\u001B[33m /+++//+:`oo+o               /::--:.\n\u001B[33m +/+o+++`o++o               ++////.\n\u001B[33m  .++.o+++oo+:`             /dddhhh.\n\u001B[33m       .+.o+oo:.          `oddhhhh+    \n\u001B[33m        +.++o+o`$`-````.:ohdhhhhh+    \n\u001B[33m         `:o+++ `ohhhhhhhhyo++os:     \n\u001B[33m           .o:`.syhhhhhhh/.oo++o`  \n\u001B[33m               /osyyyyyyo++ooo+++/     \n\u001B[33m                   ````` +oo+++o:     \n\u001B[33m                          `oo++.      ";
var voidLinux = "\u001B[32m                __.;=====;.__                  \n\u001B[32m            _.=+==++=++=+=+===;.               \n\u001B[32m             -=+++=+===+=+=+++++=_             \n\u001B[32m        .     -=:``     `--==+=++==.        \n\u001B[32m       _vi,    `            --+=++++:         \n\u001B[32m      .uvnvi.       _._       -==+==+.         \n\u001B[32m     .vvnvnI`    .;==|==;.     :|=||=|.       \n\u001B[32m+QmQQmpvvnv; _yYsyQQWUUQQQm #QmQ#:QQQWUV$QQm.  \n\u001B[32m -QQWQWpvvowZ?.wQQQE==<QWWQ/QWQW.QQWW(: jQWQE  \n\u001B[32m  -$QQQQmmU'  jQQQ@+=<QWQQ)mQQQ.mQQQC+;jWQQ@'  \n\u001B[32m   -$WQ8YnI:   QWQQwgQQWV`mWQQ.jQWQQgyyWW@!   \n\u001B[32m     -1vvnvv.     `~+++`        ++|+++       \n\u001B[32m      +vnvnnv,                 `-|===         \n\u001B[32m       +vnvnvns.           .      :=-          \n\u001B[32m        -Invnvvnsi..___..=sv=.     `          \n\u001B[32m          +Invnvnvnnnnnnnnvvnn;.               \n\u001B[32m            ~|Invnvnvvnvvvnnv}+`              \n\u001B[32m               -~|{*l}*|~                      ";
