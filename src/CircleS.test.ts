import CircleS from './CircleS'

describe('CircleS works properly', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => CircleS({})).toThrowError()
		// @ts-ignore
		expect(() => CircleS('123')).toThrowError()
		expect(() => CircleS(-10)).toThrowError()
	})
	
	test('Always returns a positive number', () => {
		for (let i = 0; i <= 10; i += .5) {
			expect(() => CircleS(i)).not.toThrowError()
			expect(CircleS(i)).not.toBeNaN()
			expect(CircleS(i)).toBeGreaterThanOrEqual(0)
		}
	})
	
	describe('Returns correct values', () => {
		
		test('R == 0 => S == 0', () => {
			expect(CircleS(0)).toBe(0)
		})
		
		test('R == 1 => S == PI', () => {
			expect(CircleS(1)).toBe(Math.PI)
		})
		
		test('R == 2 => S == 4PI', () => {
			expect(CircleS(2)).toBe(4 * Math.PI)
		})
		
	})
	
})
