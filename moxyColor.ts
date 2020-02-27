import {
	analogousColorPalette,
	complementaryColorPalette,
	compoundColorPalette,
	monochromaticColorPalette,
	triadicColorPalette,
} from './colorGenerators'

import { ColorPalette } from './colorPalettes'
import { ColorWheel } from './colorWheels'
import { hexFromRgb } from './lib/hexFromRgb'
import { hslToRgb } from './lib/hslToRgb'
import { rgbFromHex } from './lib/rgbFromHex'
import { rgbToHsl } from './lib/rgbToHsl'
import { textColorFromBgColor } from './lib/textColorFromBgColor'

// Browser support
if (window) {
	window.ColorPalette = ColorPalette
	window.ColorWheel = ColorWheel
	window.textColorFromBgColor = textColorFromBgColor
	window.monochromaticColorPalette = monochromaticColorPalette
	window.analogousColorPalette = analogousColorPalette
	window.complementaryColorPalette = complementaryColorPalette
	window.triadicColorPalette = triadicColorPalette
	window.hslToRgb = hslToRgb
	window.compoundColorPalette = compoundColorPalette
}

module.exports = {
	analogousColorPalette,
	ColorPalette,
	ColorWheel,
	complementaryColorPalette,
	compoundColorPalette,
	hexFromRgb,
	hslToRgb,
	monochromaticColorPalette,
	rgbFromHex,
	rgbToHsl,
	textColorFromBgColor,
	triadicColorPalette,
}
