import { describe, expect, it } from 'vitest';
import maybe from '../src/maybe';

describe('maybe()', () => {
	it('is a function', () => {
		expect(maybe).toBeInstanceOf(Function);
	});

	it('expects no arguments', () => {
		expect(maybe.length).toBe(1);
	});
});
