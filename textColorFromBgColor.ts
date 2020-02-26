import { rgbFromHex } from './rgbFromHex'
import { rgbToHsl } from './rgbToHsl'

const BLACK = '#000'
const WHITE = '#fff'

export const textColorFromBgColor = (bgColor: string | number[]): string => {
	if (typeof bgColor === 'string') {
		const [r, g, b] = rgbFromHex(bgColor)
		const [h, s, l] = rgbToHsl(r, g, b)
		if (l >= 50 && l <= 55 && h > 230 && s > 95) {
			return WHITE
		}
		// tslint:disable-next-line: no-conditional-assignment
		return l >= 50 ? BLACK : WHITE
	} else {
		const [r, g, b] = bgColor
		const [h, s, l] = rgbToHsl(r, g, b)
		if (l >= 50 && l <= 57 && h > 230 && s > 90) {
			return WHITE
		}
		// tslint:disable-next-line: no-conditional-assignment
		return l >= 50 ? BLACK : WHITE
	}
}
