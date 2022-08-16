import RootCount from './RootCount'

describe('RootCount works', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => RootCount('a', true, NaN)).toThrowError()
	})
	
	test('Returns correct output', () => {
		for (let i = -5; i < 5; i++)
			for (let j = -5; j < 5; j++)
				for (let k = -5; k < 5; k++) {
					expect(() => RootCount(i, j, k)).not.toThrowError()
					const res = RootCount(i, j, k)
					expect(res).not.toBeNaN()
					expect(res).not.toBeGreaterThan(2)
					expect(res).not.toBeLessThan(0)
				}
	})
	
	describe('Returns correct values', () => {
		
		test('[12, 3, -2] == 2', () => {
			expect(RootCount(12, 3, -2)).toBe(2)
		})
		
		test('[5, 1, 1] == 0', () => {
			expect(RootCount(5, 1, 1)).toBe(0)
		})
		
		test('[-8, -3, -25] == 0', () => {
			expect(RootCount(-8, -3, -25)).toBe(0)
		})
		
	})
	
})
