export const rgbFromHex = (hex: string): number[] => {
	hex = hex.replace('#', '')
	if (hex.length === 3) {
		hex += hex
	} else if (hex.length < 6) {
		hex = hex.padEnd(6, '0')
	} else if (hex.length !== 6) {
		throw new Error('Not a valid hex color!')
	}
	return hex.match(/.{2}/g)?.map((v) => parseInt(v, 16)) || []
}
