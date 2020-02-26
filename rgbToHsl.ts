export const rgbToHsl = (r: number, g: number, b: number) => {
	r /= 255
	g /= 255
	b /= 255
	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)
	let h: number = 0
	let s: number = 0
	const l = ((max + min) / 2) * 100

	if (max === min) {
		h = 0
		s = 0
	} else {
		const d = max - min
		s = l > 0.5 ? (d / (2 - max - min)) * 100 : (d / (max + min)) * 100
		h =
			max === r
				? ((60 * (g - b)) / d + 360) % 360
				: max === g
				? (60 * (b - r)) / d + 120
				: (60 * (r - g)) / d + 240
	}

	return [h, s, l]
}
