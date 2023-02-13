const callLeft =
	<T extends any[], U extends any[], V>(
		fn: (...args: [...T, ...U]) => V,
		...args: T
	): ((...remainingArgs: U) => V) =>
	(...remainingArgs: U) =>
		fn(...args, ...remainingArgs);

export default callLeft;
