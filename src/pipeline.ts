const pipeline =
	<T extends ((...args: any) => any)[]>(...fns: T) =>
	(...args: Parameters<Head<T>>) =>
		fns.reduce((acc, fn) => fn(acc), args) as unknown as ReturnType<Tail<T>>;

export default pipeline;
