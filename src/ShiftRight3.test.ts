import ShiftRight3 from './ShiftRight3'

describe('ShiftRight3 works properly', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => ShiftRight3(3)).toThrowError()
		// @ts-ignore
		expect(() => ShiftRight3([3])).toThrowError()
		// @ts-ignore
		expect(() => ShiftRight3([1, 2, 3, 4])).toThrowError()
	})
	
	describe('Returns correct values', () => {
		
		test('[1, 2, 3] => [3, 1, 2]', () => {
			expect(ShiftRight3([1, 2, 3])).toEqual([3, 1, 2])
		})
		
		test('[0, 0, 0] => [0, 0, 0]', () => {
			expect(ShiftRight3([0, 0, 0])).toEqual([0, 0, 0])
		})
		
		test('[0, 1, 0] => [0, 0, 1]', () => {
			expect(ShiftRight3([0, 1, 0])).toEqual([0, 0, 1])
		})
		
	})
	
})
