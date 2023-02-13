const once = <T extends (...args: any) => any>(fn: T) => {
	let done = false;

	return (...args: Parameters<T>): Maybe<ReturnType<T>> =>
		done ? void 0 : ((done = true), fn(args));
};

export default once;
