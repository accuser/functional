import { describe, expect, it, vi } from 'vitest';
import pipeline from '../src/pipeline';

describe('pipeline()', () => {
	it('is a function', () => {
		expect(pipeline).toBeInstanceOf(Function);
	});

	it('expects no arguments', () => {
		expect(pipeline.length).toBe(0);
	});

	describe('when applied with a single function argument', () => {
		it('returns a function', () => {
			const fn = pipeline(vi.fn);

			expect(fn).toBeInstanceOf(Function);
		});
	});

	describe('when applide with multiple function arguments', () => {
		it('returns a function', () => {
			const fn = pipeline(vi.fn, vi.fn);

			expect(fn).toBeInstanceOf(Function);
		});
	});

	describe('examples', () => {
		describe('parseIncStringify', () => {
			const fn = pipeline(parseInt, (n) => n + 1, String);

			it('when applied', () => {
				const result = fn('42');

				expect(result).toBe('43');
			});
		});
	});
});
