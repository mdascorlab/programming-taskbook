import IsPrime from './IsPrime.js'

const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		let outStr: string
		
		try {
			const num = Number(input.value)
			outStr = IsPrime(num) ? 'Prime' : 'Not prime'
		} catch (err) {
			outStr = 'NaN'
		}
		
		output.textContent = outStr
	}
})
