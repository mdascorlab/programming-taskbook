import IsPrime from './IsPrime'

describe('IsPrime works properly', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => IsPrime('1')).toThrowError()
		expect(() => IsPrime(.25)).toThrowError()
		expect(() => IsPrime(-1)).toThrowError()
	})
	
	describe('Returns correct values', () => {
		
		test('0 not prime', () => {
			expect(IsPrime(0)).toBe(false)
		})
		
		test('1 not prime', () => {
			expect(IsPrime(1)).toBe(false)
		})
		
		test('2 prime', () => {
			expect(IsPrime(2)).toBe(true)
		})
		
		test('3 prime', () => {
			expect(IsPrime(3)).toBe(true)
		})
		
		test('4 not prime', () => {
			expect(IsPrime(4)).toBe(false)
		})
		
		test('5 prime', () => {
			expect(IsPrime(5)).toBe(true)
		})
		
		test('6 not prime', () => {
			expect(IsPrime(6)).toBe(false)
		})
		
		test('7 prime', () => {
			expect(IsPrime(7)).toBe(true)
		})
		
		test('8 not prime', () => {
			expect(IsPrime(8)).toBe(false)
		})
		
		test('9 not prime', () => {
			expect(IsPrime(9)).toBe(false)
		})
		
	})
	
})
