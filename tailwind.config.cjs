/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/index.html'],
	theme: {
		extend: {
			width: {
				'30%': '30%',
				'50%': '50%'
			},
			maxWidth: {
				'70%': '70%'
			},
			maxHeight: {},
			backgroundColor: {
				'main': '#F6E58D',
				'input-focus': '#DACA8BFF'
			}
		}
	},
	plugins: []
}
