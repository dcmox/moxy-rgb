"use strict";
exports.__esModule = true;
var colorGenerators_1 = require("./colorGenerators");
var colorPalettes_1 = require("./colorPalettes");
var colorWheels_1 = require("./colorWheels");
var hexFromRgb_1 = require("./lib/hexFromRgb");
var hslToRgb_1 = require("./lib/hslToRgb");
var rgbFromHex_1 = require("./lib/rgbFromHex");
var rgbToHsl_1 = require("./lib/rgbToHsl");
var textColorFromBgColor_1 = require("./lib/textColorFromBgColor");
// Browser support
if (window) {
    window.ColorPalette = colorPalettes_1.ColorPalette;
    window.ColorWheel = colorWheels_1.ColorWheel;
    window.textColorFromBgColor = textColorFromBgColor_1.textColorFromBgColor;
    window.monochromaticColorPalette = colorGenerators_1.monochromaticColorPalette;
    window.analogousColorPalette = colorGenerators_1.analogousColorPalette;
    window.complementaryColorPalette = colorGenerators_1.complementaryColorPalette;
    window.triadicColorPalette = colorGenerators_1.triadicColorPalette;
    window.hslToRgb = hslToRgb_1.hslToRgb;
    window.compoundColorPalette = colorGenerators_1.compoundColorPalette;
}
module.exports = {
    analogousColorPalette: colorGenerators_1.analogousColorPalette,
    ColorPalette: colorPalettes_1.ColorPalette,
    ColorWheel: colorWheels_1.ColorWheel,
    complementaryColorPalette: colorGenerators_1.complementaryColorPalette,
    compoundColorPalette: colorGenerators_1.compoundColorPalette,
    hexFromRgb: hexFromRgb_1.hexFromRgb,
    hslToRgb: hslToRgb_1.hslToRgb,
    monochromaticColorPalette: colorGenerators_1.monochromaticColorPalette,
    rgbFromHex: rgbFromHex_1.rgbFromHex,
    rgbToHsl: rgbToHsl_1.rgbToHsl,
    textColorFromBgColor: textColorFromBgColor_1.textColorFromBgColor,
    triadicColorPalette: colorGenerators_1.triadicColorPalette
};
