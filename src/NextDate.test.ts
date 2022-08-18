import NextDate from './NextDate'

describe('NextDate works properly', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => NextDate('1', '-10', '2020')).toThrowError()
		expect(() => NextDate(-1, 10, 2020)).toThrowError()
		expect(() => NextDate(1, -10, 2020)).toThrowError()
		expect(() => NextDate(1, 10, -2020)).toThrowError()
		expect(() => NextDate(-1, -10, -2020)).toThrowError()
		expect(() => NextDate(0.25, .1, 110)).toThrowError()
	})
	
	describe('Returns correct values', () => {
		
		test('28/02/2020 => 29/02/2020', () => {
			expect(NextDate(28, 2, 2020)).toEqual([29, 2, 2020])
		})
		
		test('28/02/2021 => 01/03/2021', () => {
			expect(NextDate(28, 2, 2021)).toEqual([1, 3, 2021])
		})
		
		test('15/08/1973 => 16/08/1973', () => {
			expect(NextDate(15, 8, 1973)).toEqual([16, 8, 1973])
		})
		
		test('31/12/1999 => 01/01/2000', () => {
			expect(NextDate(31, 12, 1999)).toEqual([1, 1, 2000])
		})
		
	})
	
})
