"use strict";
exports.__esModule = true;
exports.rgbToHsl = function (r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = ((max + min) / 2) * 100;
    if (max === min) {
        h = 0;
        s = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? (d / (2 - max - min)) * 100 : (d / (max + min)) * 100;
        h =
            max === r
                ? ((60 * (g - b)) / d + 360) % 360
                : max === g
                    ? (60 * (b - r)) / d + 120
                    : (60 * (r - g)) / d + 240;
    }
    return [h, s, l];
};
