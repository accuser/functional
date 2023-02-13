import { describe, expect, it, vi } from 'vitest';
import unary from '../src/unary';

describe('unary()', () => {
	it('is a function', () => {
		expect(unary).toBeInstanceOf(Function);
	});

	it('expects a single argument', () => {
		expect(unary.length).toBe(1);
	});

	describe('when applied', () => {
		const fn = unary((a) => a);

		it('returns a function', () => {
			expect(fn).toBeInstanceOf(Function);
		});

		it('returns a function that expects only one argument', () => {
			expect(fn.length).toBe(1);
		});
	});

	describe('examples', () => {
		describe('toInt()', () => {
			const toInt = unary(parseInt);

			it('returns a number', () => {
				const value = toInt('42');

				expect(typeof value).toBe('number');
			});

			it('returns the correct value', () => {
				const value = toInt('42');

				expect(value).toBe(42);
			});

			it('can be applied with map()', () => {
				const array = ['1', '2', '3'].map(toInt);

				expect(array).toMatchObject([1, 2, 3]);
			});
		});
	});
});
