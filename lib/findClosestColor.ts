import { IColorPalette } from './interfaces'
import { rgbFromHex } from './rgbFromHex'

export const findClosestColor = (rgb: number[], colors: IColorPalette) => {
	const [r, g, b] = rgb
	let minDistance: number = 999
	let match: string = ''
	let mIndex: number = 0
	let index: number = 0

	for (const color of Object.keys(colors)) {
		index++
		const [r2, g2, b2] = rgbFromHex(colors[color])
		const d = Math.abs(r - r2) + Math.abs(g - g2) + Math.abs(b - b2)
		if (d < minDistance) {
			minDistance = d
			match = color
			mIndex = index
		}
	}

	return { color: match, index: mIndex }
}
