export default function RootCount(a: number, b: number, c: number): number {
	if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c))
		throw Error('Some arguments are not number')
	
	const D = b ** 2 - 4 * a * c
	
	if (D > 0) return 2
	else if (D === 0) return 1
	return 0
}
