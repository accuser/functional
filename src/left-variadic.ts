const leftVariadic = <T extends any[], U>(fn: (...args: T) => U) =>
	fn.length === 0
		? fn
		: (...args: T) =>
				fn.apply(
					[args.slice(0, args.length - fn.length + 1)].concat(
						args.slice(args.length - fn.length + 1)
					)
				);

export default leftVariadic;
