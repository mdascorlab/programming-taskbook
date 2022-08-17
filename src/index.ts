

const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		let outStr: string
		
		try {
		
		} catch (err) {
		
		}
		
		output.textContent = outStr
	}
})
