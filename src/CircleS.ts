export default function CircleS(r: number): number {
	if (typeof r !== 'number' || r < 0)
		throw Error('Wrong parameters')
	
	return Math.PI * (r ** 2)
}
