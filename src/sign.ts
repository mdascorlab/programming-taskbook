export default function sign(num: number): -1 | 0 | 1 {
	if (Number.isNaN(num) || typeof num !== 'number') throw Error('Num is not a number')
	
	if (num < 0) return -1
	else if (num > 0) return 1
	
	return 0
}
