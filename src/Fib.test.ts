import Fib from './Fib'

describe('Fib works properly', () => {
	
	test('Throws error on wrong parameters', () => {
		expect(() => Fib(-1)).toThrowError()
		expect(() => Fib(.25)).toThrowError()
		// @ts-ignore
		expect(() => Fib('1')).toThrowError()
	})
	
	describe('Test for first 5 digits', () => {
		
		test('Fib(1) == 1', () => {
			expect(Fib(1)).toBe(1)
		})
		
		test('Fib(2) == 1', () => {
			expect(Fib(2)).toBe(1)
		})
		
		test('Fib(3) == 2', () => {
			expect(Fib(3)).toBe(2)
		})
		
		test('Fib(4) == 3', () => {
			expect(Fib(4)).toBe(3)
		})
		
		test('Fib(5) == 5', () => {
			expect(Fib(5)).toBe(5)
		})
		
	})
	
})
