export default function Fib(n: number): number {
	if (
		typeof n !== 'number'
		|| n < 0
		|| n !== Number(n.toFixed(0))
	)
		throw Error('Wrong argument')
	
	if (n === 0) return 0
	if (n === 1) return 1
	
	return Fib(n - 1) + Fib(n - 2)
}
