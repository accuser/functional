import { describe, expect, it, vi } from 'vitest';
import compose from '../src/compose';

describe('compose()', () => {
	it('is a function', () => {
		expect(compose).toBeInstanceOf(Function);
	});

	it('expects no arguments', () => {
		expect(compose.length).toBe(0);
	});

	describe('when applied with a single function argument', () => {
		it('returns a function', () => {
			const fn = compose(vi.fn);

			expect(fn).toBeInstanceOf(Function);
		});
	});

	describe('when applide with multiple function arguments', () => {
		it('returns a function', () => {
			const fn = compose(vi.fn, vi.fn);

			expect(fn).toBeInstanceOf(Function);
		});
	});

	describe('examples', () => {
		describe('parseIncStringify', () => {
			const fn = compose(String, (n) => n + 1, parseInt);

			it('when applied', () => {
				const result = fn('42');

				expect(result).toBe('43');
			});
		});
	});
});
