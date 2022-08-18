import { MonthDays } from './NextDate'

describe('MonthDays works properly', () => {
	
	test('Throws error on wrong input', () => {
		expect(() => MonthDays(-1, 10)).toThrowError()
		expect(() => MonthDays(10, -1)).toThrowError()
		// @ts-ignore
		expect(() => MonthDays(.55, 7.31)).toThrowError()
	})
	
	describe('Returns correct values', () => {
		
		test('02/2020 => 29', () => {
			expect(MonthDays(2, 2020)).toBe(29)
		})
		
		test('02/2021 => 28', () => {
			expect(MonthDays(2, 2021)).toBe(28)
		})
		
		test('08/1977 => 31', () => {
			expect(MonthDays(8, 1997)).toBe(31)
		})
		
		test('02/1900 => 28', () => {
			expect(MonthDays(2, 1900)).toBe(28)
		})
		
		test('3125 => false', () => {
			expect(MonthDays(11, 2022)).toBe(30)
		})
		
	})
	
})

