"use strict";
exports.__esModule = true;
var rgbFromHex_1 = require("./rgbFromHex");
exports.findClosestColor = function (rgb, colors) {
    var r = rgb[0], g = rgb[1], b = rgb[2];
    var minDistance = 999;
    var match = '';
    var mIndex = 0;
    var index = 0;
    for (var _i = 0, _a = Object.keys(colors); _i < _a.length; _i++) {
        var color = _a[_i];
        index++;
        var _b = rgbFromHex_1.rgbFromHex(colors[color]), r2 = _b[0], g2 = _b[1], b2 = _b[2];
        var d = Math.abs(r - r2) + Math.abs(g - g2) + Math.abs(b - b2);
        if (d < minDistance) {
            minDistance = d;
            match = color;
            mIndex = index;
        }
    }
    return { color: match, index: mIndex };
};
