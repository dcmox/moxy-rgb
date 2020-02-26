import { hslToRgb } from './hslToRgb'
import { rgbFromHex } from './rgbFromHex'
import { rgbToHsl } from './rgbToHsl'

export const monochromaticColorPalette = (color: string | number[]) => {
	if (typeof color === 'string') {
		const [r, g, b] = rgbFromHex(color)
		const [h, s, l] = rgbToHsl(r, g, b)
		const ret = []
		let lx: number = 100
		for (let i = 0; i < 5; i++) {
			ret.push(hslToRgb(h, s, lx))
			lx -= 15
		}
		return ret
	} else {
		const [r, g, b] = color
		const [h, s, l] = rgbToHsl(r, g, b)
		const ret = []
		let lx: number = 85
		for (let i = 0; i < 5; i++) {
			ret.push(hslToRgb(h, s, lx))
			lx -= 15
		}
		return ret
	}
}

export const analogousColorPalette = (color: string | number[]) => {
	if (typeof color === 'string') {
		const [r, g, b] = rgbFromHex(color)
		const [h, s, l] = rgbToHsl(r, g, b)
		const ret = []
		const hn: number = h - 10 < 0 ? 360 - (h - 30) : h - 30
		const hp: number = h + (10 % 360)
		ret.push(hslToRgb(hp, s, l + 30))
		ret.push(hslToRgb(hp, s, l))
		ret.push(hslToRgb(h, s, l))
		ret.push(hslToRgb(hn, s, l))
		ret.push(hslToRgb(hn, s, l - 30))

		return ret
	} else {
		const [r, g, b] = color
		const [h, s, l] = rgbToHsl(r, g, b)
		const ret = []
		const hn: number = h - 10 < 0 ? 360 - (h - 30) : h - 30
		const hp: number = h + (10 % 360)
		ret.push(hslToRgb(hp, s, l + 30))
		ret.push(hslToRgb(hp, s, l))
		ret.push(hslToRgb(h, s, l))
		ret.push(hslToRgb(hn, s, l))
		ret.push(hslToRgb(hn, s, l - 30))

		return ret
	}
}

// Find closest color -> ColorWheelRYB -> Then grab opposite
export const complementaryColorPalette = (color: string | number[]) => {
	if (typeof color === 'string') {
		const [r, g, b] = rgbFromHex(color)
		const [h, s, l] = rgbToHsl(r, g, b)
		const ret = []
		const hn: number = h - 10 < 0 ? 360 - (h - 30) : h - 30
		ret.push(hslToRgb(h, s, l))
		ret.push(hslToRgb(hn, s, l))

		return ret
	} else {
		const [r, g, b] = color
		const [h, s, l] = rgbToHsl(r, g, b)
		const ret = []
		const hp: number = h > 180 ? Math.abs(180 - h) : 180 + h

		console.log(h, s, l, hp)
		ret.push(hslToRgb(hp, s, l + 30))
		ret.push(hslToRgb(hp, s, l))
		ret.push(hslToRgb(h, s, l))
		ret.push(hslToRgb(h, s, l - 15))
		ret.push(hslToRgb(h, s, l - 30))

		return ret
	}
}
