const compose =
	<T extends ((...args: any) => any)[]>(...fns: T) =>
	(...args: Parameters<Tail<T>>) =>
		fns.reduceRight((acc, fn) => fn(acc), args) as unknown as ReturnType<
			Head<T>
		>;

export default compose;
