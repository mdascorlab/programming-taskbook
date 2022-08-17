export default function Quarter(x: number, y: number): 1 | 2 | 3 | 4 {
	if (typeof x !== 'number' || typeof y !== 'number')
		throw Error('Wrong arguments')
	
	if (x > 0) {
		if (y > 0) return 1
		return 2
	} else {
		if (y > 0) return 4
		return 3
	}
}