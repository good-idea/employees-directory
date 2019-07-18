export * from './global'
import { merge } from 'lodash'

export const defaultTheme = {
	/* Spacing - applies to:
	 *   margin, margin-top, margin-right, margin-bottom, margin-left, padding,
	 *   padding-top, padding-right, padding-bottom, padding-left, grid-gap,
	 *   grid-column-gap, grid-row-gap
	 */
	space: [0, 4, 8, 16, 32, 64],

	/* Font Sizes, applies to:
	 *   font-size
	 */
	fontSizes: [
		10, // small text: h5, captioins
		13, // readable text: p, h4
		18, // h3
		22, // h2
		30, // h1
	],
	fontWeights: [200, 400, 600, 800],
	fonts: {
		sans: "'Rubik', sans-serif",
		display: "'Staatliches', cursive",
	},

	/* Applies to:
	 *   z-index
	 */
	zIndices: {
		base: 0,
		navigation: 100,
		alert: 200,
	},

	/* Colors, applies to:
	 *  color, background-color, border-color
	 */
	colors: {
		/* Starts light, slightly darker for offset backgrounds (callouts, code blocks, quotes) */
		body: ['#F8F8F8', '#E9EDED', '#D9E1E1', '#CAD6D6'],
		/* Text colors, starts with "stronger" colors (body text), goes lighter (image captions, less important text) */
		/* Should offset well on the primary & body colors */
		text: [
			'rgb(43,41,41)',
			'rgb(92,90,92)',
			'rgb(141,140,142)',
			'rgb(190,189,193)',
		],
		/* A "primary" color, used on text & highlighting UI features such as borders or buttons */
		/* Starts "stronger" (element borders), goes lighter (UI backgrounds) */
		primary: [
			'rgb(11,120,156)',
			'rgb(47,143,172)',
			'rgb(84,166,187)',
			'rgb(120,188,203)',
			'rgb(157,211,218)',
			'rgb(193,234,234)',
		],
		/* An "offset" color, with strong contrast to the primary color of the same index 
    /* 'color: offset.2' should look good on 'background-color: primary.2' */
		offset: ['#E0E7F6', '#D1BAD5', '#C38DB4', '#B56093', '#A73372', '#990651'],
		/* Used for errors and warnings. Starts with "stronger" colors */
		error: ['#F52828', '#F57628', '#f09e32'],
	},
	breakpoints: {
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	},
}

const bossThemeOverrides = {
	fonts: {
		display: "'Butcherman', cursive",
	},

	colors: {
		body: ['rgb(61, 20, 53)', '#E9EDED', '#D9E1E1', '#CAD6D6'],
	},
}

export const bossTheme = merge({}, defaultTheme, bossThemeOverrides)
