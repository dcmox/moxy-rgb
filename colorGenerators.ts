import { RYB } from './colorWheels'
import { findClosestColor } from './lib/findClosestColor'
import { hslToRgb } from './lib/hslToRgb'
import { IColorPalette } from './lib/interfaces'
import { rgbFromHex } from './lib/rgbFromHex'
import { rgbToHsl } from './lib/rgbToHsl'

export const monochromaticColorPalette = (color: string | number[]) => {
	const [r, g, b] = typeof color === 'string' ? rgbFromHex(color) : color
	const [h, s, l] = rgbToHsl(r, g, b)
	const ret = []
	let lx: number = 85
	for (let i = 0; i < 5; i++) {
		ret.push(hslToRgb(h, s, lx))
		lx -= 15
	}
	return ret
}

export const analogousColorPalette = (color: string | number[]) => {
	const [r, g, b] = typeof color === 'string' ? rgbFromHex(color) : color
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

export const complementaryColorPalette = (color: string | number[]) => {
	const { color: cColor, index } =
		typeof color === 'string'
			? findClosestColor(rgbFromHex(color), RYB)
			: findClosestColor(color, RYB)
	const colors = Object.keys(RYB)
	const opposingColor = RYB[colors[(index + 5) % colors.length]]

	const [r2, g2, b2] = rgbFromHex(RYB[cColor])
	const [r3, g3, b3] = rgbFromHex(opposingColor)
	const [h, s, l] = rgbToHsl(r2, g2, b2)
	const [h2, s2, l2] = rgbToHsl(r3, g3, b3)
	const ret = []

	ret.push(hslToRgb(h, s, l))
	ret.push(hslToRgb(h, s, l - 20))
	ret.push(hslToRgb(h2, s2, l2))
	ret.push(hslToRgb(h2, s2, l2 - 20))
	ret.push(hslToRgb(h2, s2, l2 - 40))

	return ret
}

export const triadicColorPalette = (color: string | number[]) => {
	const [r, g, b] = typeof color === 'string' ? rgbFromHex(color) : color

	const { color: cColor, index } = findClosestColor([r, g, b], RYB)
	const colors = Object.keys(RYB)
	const opposingColor = RYB[colors[(index + 7) % colors.length]]
	const opposingColorAlt = RYB[colors[(index + 3) % colors.length]]

	const [r2, g2, b2] = rgbFromHex(RYB[cColor])
	const [r3, g3, b3] = rgbFromHex(opposingColor)
	const [r4, g4, b4] = rgbFromHex(opposingColorAlt)
	const [h, s, l] = rgbToHsl(r2, g2, b2)
	const [h2, s2, l2] = rgbToHsl(r3, g3, b3)
	const [h3, s3, l3] = rgbToHsl(r4, g4, b4)
	const ret = []

	ret.push(hslToRgb(h2, s2, l + 20))
	ret.push(hslToRgb(h2, s2, l))
	ret.push(hslToRgb(h, s, l))
	ret.push(hslToRgb(h3, s3, l3))
	ret.push(hslToRgb(h, s, 15))

	return ret
}

export const compoundColorPalette = (color: string | number[]) => {
	const [r, g, b] = typeof color === 'string' ? rgbFromHex(color) : color

	const { color: cColor, index } = findClosestColor([r, g, b], RYB)
	const colors = Object.keys(RYB)
	const opposingColor = RYB[colors[(index + 4) % colors.length]]
	const opposingColorAlt = RYB[colors[(index + 6) % colors.length]]

	const [r2, g2, b2] = rgbFromHex(RYB[cColor])
	const [r3, g3, b3] = rgbFromHex(opposingColor)
	const [r4, g4, b4] = rgbFromHex(opposingColorAlt)
	const [h, s, l] = rgbToHsl(r2, g2, b2)
	const [h2, s2, l2] = rgbToHsl(r3, g3, b3)
	const [h3, s3, l3] = rgbToHsl(r4, g4, b4)
	const ret = []

	ret.push(hslToRgb(h2, s2, l + 20))
	ret.push(hslToRgb(h2, s2, l))
	ret.push(hslToRgb(h, s, l))
	ret.push(hslToRgb(h3, s3, l3))
	ret.push(hslToRgb(h3, s3, 15))

	return ret
}
