import TriangleP from './TriangleP'

describe('TriangleP works correct', () => {
	
	test('Throws error on wrong input', () => {
		// @ts-ignore
		expect(() => TriangleP('a', true)).toThrowError()
		expect(() => TriangleP(10, -1)).toThrowError()
		expect(() => TriangleP(-10, -.00005)).toThrowError()
	})
	
	test('Returns a number', () => {
		expect(TriangleP(10, .2343)).not.toBeNaN()
		expect(TriangleP(0, .0)).not.toBeNaN()
		expect(TriangleP(10, .2343)).not.toBeNaN()
	})
	
	describe('Returns correct values', () => {
		expect(TriangleP(0, 1)).toBe(0)
		expect(TriangleP(1, 0)).toBe(0)
		expect(TriangleP(0, 0)).toBe(0)
		
		expect(TriangleP(5, 2)).toBeCloseTo(9.6, 1)
		expect(TriangleP(6, 3)).toBeCloseTo(12.7, 1)
		expect(TriangleP(25, 8.5)).toBeCloseTo(45.3, 1)
	})
	
})
