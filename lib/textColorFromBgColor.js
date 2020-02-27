"use strict";
exports.__esModule = true;
var rgbFromHex_1 = require("./rgbFromHex");
var rgbToHsl_1 = require("./rgbToHsl");
var BLACK = '#000';
var WHITE = '#fff';
exports.textColorFromBgColor = function (bgColor) {
    if (typeof bgColor === 'string') {
        var _a = rgbFromHex_1.rgbFromHex(bgColor), r = _a[0], g = _a[1], b = _a[2];
        var _b = rgbToHsl_1.rgbToHsl(r, g, b), h = _b[0], s = _b[1], l = _b[2];
        if (l >= 50 && l <= 55 && h > 230 && s > 95) {
            return WHITE;
        }
        // tslint:disable-next-line: no-conditional-assignment
        return l >= 50 ? BLACK : WHITE;
    }
    else {
        var r = bgColor[0], g = bgColor[1], b = bgColor[2];
        var _c = rgbToHsl_1.rgbToHsl(r, g, b), h = _c[0], s = _c[1], l = _c[2];
        if (l >= 50 && l <= 57 && h > 230 && s > 90) {
            return WHITE;
        }
        // tslint:disable-next-line: no-conditional-assignment
        return l >= 50 ? BLACK : WHITE;
    }
};
