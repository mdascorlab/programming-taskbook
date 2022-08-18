import { IsLeapYear } from './NextDate'

describe('IsLeapYear works properly', () => {
	
	test('Throws error on wrong input', () => {
		expect(() => IsLeapYear(-1)).toThrowError()
		expect(() => IsLeapYear(.25)).toThrowError()
		// @ts-ignore
		expect(() => IsLeapYear('10')).toThrowError()
	})
	
	describe('Returns correct values', () => {
	
		test('2 => false', () => {
			expect(IsLeapYear(2)).toBe(false)
		})
	
		test('4 => true', () => {
			expect(IsLeapYear(4)).toBe(true)
		})
	
		test('2000 => true', () => {
			expect(IsLeapYear(2000)).toBe(true)
		})
	
		test('100 => false', () => {
			expect(IsLeapYear(100)).toBe(false)
		})
	
		test('3125 => false', () => {
			expect(IsLeapYear(3125)).toBe(false)
		})
	
	})
	
})
