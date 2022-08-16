const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!


input.addEventListener('keydown', event => {
	console.log(event.key)
	if (event.key === 'Enter') {
		event.preventDefault()
		
		output.textContent = ''
	}
})
