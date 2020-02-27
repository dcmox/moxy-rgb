"use strict";
exports.__esModule = true;
var colorWheels_1 = require("./colorWheels");
var findClosestColor_1 = require("./lib/findClosestColor");
var hslToRgb_1 = require("./lib/hslToRgb");
var rgbFromHex_1 = require("./lib/rgbFromHex");
var rgbToHsl_1 = require("./lib/rgbToHsl");
exports.monochromaticColorPalette = function (color) {
    var _a = typeof color === 'string' ? rgbFromHex_1.rgbFromHex(color) : color, r = _a[0], g = _a[1], b = _a[2];
    var _b = rgbToHsl_1.rgbToHsl(r, g, b), h = _b[0], s = _b[1], l = _b[2];
    var ret = [];
    var lx = 85;
    for (var i = 0; i < 5; i++) {
        ret.push(hslToRgb_1.hslToRgb(h, s, lx));
        lx -= 15;
    }
    return ret;
};
exports.analogousColorPalette = function (color) {
    var _a = typeof color === 'string' ? rgbFromHex_1.rgbFromHex(color) : color, r = _a[0], g = _a[1], b = _a[2];
    var _b = rgbToHsl_1.rgbToHsl(r, g, b), h = _b[0], s = _b[1], l = _b[2];
    var ret = [];
    var hn = h - 10 < 0 ? 360 - (h - 30) : h - 30;
    var hp = h + (10 % 360);
    ret.push(hslToRgb_1.hslToRgb(hp, s, l + 30));
    ret.push(hslToRgb_1.hslToRgb(hp, s, l));
    ret.push(hslToRgb_1.hslToRgb(h, s, l));
    ret.push(hslToRgb_1.hslToRgb(hn, s, l));
    ret.push(hslToRgb_1.hslToRgb(hn, s, l - 30));
    return ret;
};
exports.complementaryColorPalette = function (color) {
    var _a = typeof color === 'string'
        ? findClosestColor_1.findClosestColor(rgbFromHex_1.rgbFromHex(color), colorWheels_1.RYB)
        : findClosestColor_1.findClosestColor(color, colorWheels_1.RYB), cColor = _a.color, index = _a.index;
    var colors = Object.keys(colorWheels_1.RYB);
    var opposingColor = colorWheels_1.RYB[colors[(index + 5) % colors.length]];
    var _b = rgbFromHex_1.rgbFromHex(colorWheels_1.RYB[cColor]), r2 = _b[0], g2 = _b[1], b2 = _b[2];
    var _c = rgbFromHex_1.rgbFromHex(opposingColor), r3 = _c[0], g3 = _c[1], b3 = _c[2];
    var _d = rgbToHsl_1.rgbToHsl(r2, g2, b2), h = _d[0], s = _d[1], l = _d[2];
    var _e = rgbToHsl_1.rgbToHsl(r3, g3, b3), h2 = _e[0], s2 = _e[1], l2 = _e[2];
    var ret = [];
    ret.push(hslToRgb_1.hslToRgb(h, s, l));
    ret.push(hslToRgb_1.hslToRgb(h, s, l - 20));
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l2));
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l2 - 20));
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l2 - 40));
    return ret;
};
exports.triadicColorPalette = function (color) {
    var _a = typeof color === 'string' ? rgbFromHex_1.rgbFromHex(color) : color, r = _a[0], g = _a[1], b = _a[2];
    var _b = findClosestColor_1.findClosestColor([r, g, b], colorWheels_1.RYB), cColor = _b.color, index = _b.index;
    var colors = Object.keys(colorWheels_1.RYB);
    var opposingColor = colorWheels_1.RYB[colors[(index + 7) % colors.length]];
    var opposingColorAlt = colorWheels_1.RYB[colors[(index + 3) % colors.length]];
    var _c = rgbFromHex_1.rgbFromHex(colorWheels_1.RYB[cColor]), r2 = _c[0], g2 = _c[1], b2 = _c[2];
    var _d = rgbFromHex_1.rgbFromHex(opposingColor), r3 = _d[0], g3 = _d[1], b3 = _d[2];
    var _e = rgbFromHex_1.rgbFromHex(opposingColorAlt), r4 = _e[0], g4 = _e[1], b4 = _e[2];
    var _f = rgbToHsl_1.rgbToHsl(r2, g2, b2), h = _f[0], s = _f[1], l = _f[2];
    var _g = rgbToHsl_1.rgbToHsl(r3, g3, b3), h2 = _g[0], s2 = _g[1], l2 = _g[2];
    var _h = rgbToHsl_1.rgbToHsl(r4, g4, b4), h3 = _h[0], s3 = _h[1], l3 = _h[2];
    var ret = [];
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l + 20));
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l));
    ret.push(hslToRgb_1.hslToRgb(h, s, l));
    ret.push(hslToRgb_1.hslToRgb(h3, s3, l3));
    ret.push(hslToRgb_1.hslToRgb(h, s, 15));
    return ret;
};
exports.compoundColorPalette = function (color) {
    var _a = typeof color === 'string' ? rgbFromHex_1.rgbFromHex(color) : color, r = _a[0], g = _a[1], b = _a[2];
    var _b = findClosestColor_1.findClosestColor([r, g, b], colorWheels_1.RYB), cColor = _b.color, index = _b.index;
    var colors = Object.keys(colorWheels_1.RYB);
    var opposingColor = colorWheels_1.RYB[colors[(index + 4) % colors.length]];
    var opposingColorAlt = colorWheels_1.RYB[colors[(index + 6) % colors.length]];
    var _c = rgbFromHex_1.rgbFromHex(colorWheels_1.RYB[cColor]), r2 = _c[0], g2 = _c[1], b2 = _c[2];
    var _d = rgbFromHex_1.rgbFromHex(opposingColor), r3 = _d[0], g3 = _d[1], b3 = _d[2];
    var _e = rgbFromHex_1.rgbFromHex(opposingColorAlt), r4 = _e[0], g4 = _e[1], b4 = _e[2];
    var _f = rgbToHsl_1.rgbToHsl(r2, g2, b2), h = _f[0], s = _f[1], l = _f[2];
    var _g = rgbToHsl_1.rgbToHsl(r3, g3, b3), h2 = _g[0], s2 = _g[1], l2 = _g[2];
    var _h = rgbToHsl_1.rgbToHsl(r4, g4, b4), h3 = _h[0], s3 = _h[1], l3 = _h[2];
    var ret = [];
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l + 20));
    ret.push(hslToRgb_1.hslToRgb(h2, s2, l));
    ret.push(hslToRgb_1.hslToRgb(h, s, l));
    ret.push(hslToRgb_1.hslToRgb(h3, s3, l3));
    ret.push(hslToRgb_1.hslToRgb(h3, s3, 15));
    return ret;
};
