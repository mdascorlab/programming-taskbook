import sign from './sign'

describe('Sign works properly', () => {
	
	test('Safely returns a number', () => {
		for (let i = -10; i <= 10; i++) {
			expect(() => sign(i)).not.toThrowError()
			expect(sign(i)).not.toBeNaN()
		}
	})
	
	test('Throws error on NaN parameter', () => {
		// Ignore ts since it forbids passing NaN to sign
		// @ts-ignore
		expect(() => sign('abc')).toThrowError()
	})
	
	test('-1 for less than 0', () => {
		expect(sign(-10)).toBe(-1)
	})
	
	test('0 for 0', () => {
		expect(sign(-0)).toBe(0)
	})
	
	test('1 for more than 0', () => {
		expect(sign(10)).toBe(1)
