import something from './something.js';

const maybe =
	<T extends (...args: any) => any>(fn: T) =>
	(...args: Parameters<T>): Maybe<ReturnType<T>> =>
		args.every(something) ? fn(args) : void 0;

export default maybe;
