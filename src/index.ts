import ShiftRight3 from './ShiftRight3.js'

const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		let outStr: string
		
		try {
			const list = input.value
				.split(',')
				.map(num => Number(num))
			
			const res = ShiftRight3(list as [number, number, number])
			
			outStr = `[${res[0]}, ${res[1]}, ${res[2]}]`
		} catch (err) {
			outStr = 'Error'
		}
		
		output.textContent = outStr
	}
})
