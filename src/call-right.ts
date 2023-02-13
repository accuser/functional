const callRight =
	<T extends any[], U extends any[], V>(
		fn: (...args: [...T, ...U]) => V,
		...args: U
	): ((...remainingArgs: T) => V) =>
	(...remainingArgs: T) =>
		fn(...remainingArgs, ...args);

export default callRight;
