/**
 * The unary decorator ensures that the function parameter is applied with
 * exactly one argument.
 *
 * @remarks
 *
 * `unary` is a higher-order function that takes a single argument `fn`, which
 * is expected to be a function. It returns a new function that wraps the
 * original function `fn`.
 *
 * The function checks if `fn` has a length property equal to 1. If it does, it
 * means that the original function `fn` takes a single argument, so unary
 * returns `fn` as is.
 *
 * If `fn.length` is not equal to 1, unary returns a new anonymous function
 * that takes a single argument `args_0` of type `T`. This anonymous function
 * calls `fn` with `args_0` as its argument, effectively wrapping `fn` and
 * making it a unary function (i.e. a function that takes a single argument).
 *
 * @param fn - function to decotrate
 * @returns a unary function
 *
 * @example
 *
 * Wrap `parseInt(string: string, radix?: number)` to correctly map strings to
 * integer values, applying only the `string` argument.
 * ```js
 * ['1', '2', '3'].map(parseInt); // => [1, NaN, NaN]
 * ['1', '2', '3'].map(unary(parseInt)); // => [1, 2, 3]
 * ```
 */
const unary = <T, U>(fn: (args_0: T) => U) =>
	fn.length === 1 ? fn : (args_0: T) => fn(args_0);

export default unary;
