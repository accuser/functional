import { describe, expect, it, vi } from 'vitest';
import tap from '../src/tap';

describe('tap()', () => {
	it('is a function', () => {
		expect(tap).toBeInstanceOf(Function);
	});

	it('expects two argument', () => {
		expect(tap.length).toBe(2);
	});

	describe('when applied with a tap function', () => {
		const value = tap(42, vi.fn());

		it('returns the tapped value', () => {
			expect(value).toBe(42);
		});
	});

	describe('when applied with null instead of a tap function', () => {
		const value = tap(42, null);

		it('returns the tapped value', () => {
			expect(value).toBe(42);
		});
	});

	describe('when applied without a tap function', () => {
		const fn = tap(42);

		it('returns a function', () => {
			expect(fn).toBeInstanceOf(Function);
		});

		it('returns a function that can be applied with a tap function', () => {
			const value = fn(vi.fn());

			expect(value).toBe(42);
		});

		it('returns a function that can be applied with null', () => {
			const value = fn(null);

			expect(value).toBe(42);
		});

		it('returns a function that can be applied without arguments', () => {
			const value = fn();

			expect(value).toBe(42);
		});
	});

	describe('examples', () => {
		describe('with `console.log()`', () => {
			console.log = vi.fn();

			const value = tap(42, console.log);

			it('applies the tap function', () => {
				expect(console.log).toHaveBeenCalledWith(42);
			});

			it('returns a number', () => {
				expect(typeof value).toBe('number');
			});

			it('returns the correct value', () => {
				expect(value).toBe(42);
			});
		});
	});
});
