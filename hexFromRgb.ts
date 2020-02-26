export const hexFromRgb = (r: number, g: number, b: number): string =>
	r.toString(16).padStart(2, '0') +
	g.toString(16).padStart(2, '0') +
	b
		.toString(16)
		.padStart(2, '0')
		.replace(/([a-f0-9])\1{5}/gi, (m) => m.slice(0, 3))
