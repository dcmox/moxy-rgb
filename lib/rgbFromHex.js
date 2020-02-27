"use strict";
exports.__esModule = true;
exports.rgbFromHex = function (hex) {
    var _a;
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex += hex;
    }
    else if (hex.length < 6) {
        hex = hex.padEnd(6, '0');
    }
    else if (hex.length !== 6) {
        throw new Error('Not a valid hex color!');
    }
    return ((_a = hex.match(/.{2}/g)) === null || _a === void 0 ? void 0 : _a.map(function (v) { return parseInt(v, 16); })) || [];
};
