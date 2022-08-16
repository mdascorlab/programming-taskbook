import RootCount from './RootCount.js'

const input = document.querySelector<HTMLInputElement>('#main-input')!
const output = document.querySelector<HTMLDivElement>('#main-output')!

input.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		
		let outStr: string
		const [a, b, c] = input.value
			.split(',')
			.map(num => Number(num))
		
		try {
			outStr = RootCount(a, b, c).toString()
		} catch (err) {
			outStr = 'Wrong input'
		}
		
		output.textContent = outStr
	}
})
