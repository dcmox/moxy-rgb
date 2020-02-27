# moxy-rgb

Comprehensive color library for your web development needs. Inspired by [W3Schools.com](https://www.w3schools.com/)

![Moxy Color Library](https://i.imgur.com/8hc8nQk.jpg)

## CSS Color Palettes

-   Crayola - Features the main 16 colors of Crayola Crayons
-   Flat UI - Features the main colors from the popular Flat UI theme
-   iPhone - Features the main colors of the iPhone 11
-   Metro - Features the main colors of Metro UI
-   Windows 8 - Features the main colors of Windows 8
-   xkcd - Features over 900 named colors by the xkcd website, [found here](https://xkcd.com/color/rgb/).

Color palettes include CSS vars which can be included into styles via:

```css
.className {
	color: var(--colorName);
}
```

or via the existing classes, eg:

```html
<span class="c-red"
	>Text color is red<span>
		<span class="bg-red">Background color is red<span></span></span></span
></span>
```

## Color Palette Generation

For each of the below functions, input is a HEX-based color value or RGB array. Output returns an array of 5 colors (R, G, B) that work well together with the input color.

-   monochromaticColorPalette(color: string | number[]) - Returns different tones from the same hue.
-   analogousColorPalette(color: string | number[]) - Returns colors that are next to each other on the RYB color wheel.
-   complementaryColorPalette(color: string | number[]) - Returns colors that are on the opposite side of the RYB color wheel.
-   triadicColorPalette(color: string | number[]) - Returns colors made up of hues that are equally spaced around the color wheel.
-   compoundColorPalette(color: string | number[]) - Returns colors on both sides of the opposite hue.

Example use:

```typescript
const { analogousColorPalette } = require('moxy-color')
console.log(monochromaticColorPalette('ff00ff'))
// returns an array of 5 colors, eg:
// [255, 179, 255]
// [255, 102, 255]
// [255, 26, 255]
// [204, 0, 204]
// [128, 0, 127]
```

## Color conversion functions

-   hexFromRgb(r: number, g: number, b: number) - Converts RGB (red, green, and blue) to hex value (eg, 'ff0000')
-   hslToRgb(h: number, s: number, l: number) - Converts HSL (hue, saturation, and light) to RGB array
-   rgbFromHex(hex: string) - Converts HEX (eg, 'ff0000') to RGB array ([255, 0, 0])
-   rgbToHsl(r: number, g: number, b: number) - Converts RGB array to HSL

## Helper functions

-   textColorFromBgColor(color: string | number[]) - Returns #fff or #000 depending on a specified background color (hex or RGB array) to ensure the text is readable.

## Color Palettes

```typescript
const { ColorPalette } = require('moxy-color')
// Below are the propeties of the ColorPalette object
{
	Assorted: { // Arrays
		AdriftInDreams,
		Compatible,
		CuriosityKilled,
		GiantGoldfish,
		GoodFriends,
		Terra,
		ThoughtProvoking,
	},
	Brands: { // Arrays
		Amazon,
		Android,
		CreativeCommons,
		Facebook,
		Google,
		IBM,
		Intagram,
		Intel,
		Microsoft,
		Netflix,
		Nintendo,
		Pepsi,
		Reddit,
		Twitter,
		Yahoo,
	},
	Themes: { // Key-Value objects with named colors
		FlatUI,
		Metro,
		Windows8,
	},
	xkcd, // Key-Value object with named colors
}
```

## Color Wheels

```typescript
const { ColorWheel } = require('moxy-color')
// Supports Cyan/Magenta/Yellow, Red/Green/Blue, and Red/Yellow/Blue Color Palettes
{
	CMY,
	RGB,
	RYB,
}
```
