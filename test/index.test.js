import { describe, expect, it } from 'vitest';
import * as index from '../src';

describe('index', () => {
	it('exports compose()', () => {
		expect(index.compose).toBeDefined();
		expect(index.compose).toBeInstanceOf(Function);
	});
});
