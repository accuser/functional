const not =
	<T>(fn: (args_0: T) => boolean) =>
	(x: T) =>
		!fn(x);

export default not;
