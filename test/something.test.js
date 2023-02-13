import { describe, expect, it } from 'vitest';
import not from '../src/not';
import something from '../src/something';

describe('something()', () => {
	it('is a function', () => {
		expect(something).toBeInstanceOf(Function);
	});

	it('expects one argument', () => {
		expect(something.length).toBe(1);
	});

	describe('when applied with nothing', () => {
		it('returns false', () => {
			const values = [null, undefined].map(something);

			expect(values.every(not(Boolean))).toBe(true);
		});
	});

	describe('when applied with something', () => {
		it('returns true', () => {
			const values = [0, 0.0, '', false].map(something);

			expect(values.every(Boolean)).toBe(true);
		});
	});
});
