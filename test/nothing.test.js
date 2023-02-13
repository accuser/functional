import { describe, expect, it } from 'vitest';
import nothing from '../src/nothing';
import { isFalse, isTrue } from './helpers';

describe('nothing()', () => {
	it('is a function', () => {
		expect(nothing).toBeInstanceOf(Function);
	});

	it('expects one argument', () => {
		expect(nothing.length).toBe(1);
	});

	describe('when applied with nothing', () => {
		it('returns true', () => {
			const values = [null, undefined].map(nothing);

			expect(values.every(isTrue)).toBe(true);
		});
	});

	describe('when applied with something', () => {
		it('returns false', () => {
			const values = [0, 0.0, '', false].map(nothing);

			expect(values.every(isFalse)).toBe(true);
		});
	});
});
