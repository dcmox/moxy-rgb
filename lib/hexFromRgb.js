"use strict";
exports.__esModule = true;
exports.hexFromRgb = function (r, g, b) {
    return r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b
            .toString(16)
            .padStart(2, '0')
            .replace(/([a-f0-9])\1{5}/gi, function (m) { return m.slice(0, 3); });
};
