import sign from './sign.js'

const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		let outStr: string
		
		try {
			outStr = sign(parseFloat(input.value)).toString()
		} catch (err) {
			outStr = 'NaN'
		}
		
		output.textContent = outStr
	}
})
