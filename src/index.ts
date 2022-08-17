import Fib from './Fib.js'

const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		let outStr: string
		
		try {
			const n = parseFloat(input.value)
			outStr = Fib(n).toString()
		} catch (err) {
			outStr = 'NaN'
		}
		
		output.textContent = outStr
	}
})
