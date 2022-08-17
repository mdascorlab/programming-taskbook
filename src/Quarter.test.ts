import Quarter from './Quarter'

describe('Quarter works properly', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => Quarter([1], 2)).toThrowError()
		// @ts-ignore
		expect(() => Quarter(true, false)).toThrowError()
	})
	
	test('Returns numbers in range 1-4', () => {
		for (let i = -10; i >= 10; i++)
			for (let j = -10; j >= 10; j++) {
				if (i === 0 || j === 0) continue
				
				expect(Quarter(i, j)).not.toBeNaN()
				expect(Quarter(i, j)).not.toBeGreaterThan(4)
				expect(Quarter(i, j)).not.toBeLessThan(1)
			}
	})
	
	describe('Returns correct values', () => {
		
		test('-x, +y == 4', () => {
			expect(Quarter(-1, 1)).toBe(4)
		})
		
		test('-x, -y == 3', () => {
			expect(Quarter(-1, -1)).toBe(3)
		})
		
		test('+x, -y == 2', () => {
			expect(Quarter(1, -1)).toBe(2)
		})
		
		test('+x, +y == 1', () => {
			expect(Quarter(1, 1)).toBe(1)
		})
		
	})
	
})
