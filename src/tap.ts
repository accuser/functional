const tap = <T>(value: T, fn?: ((value: T) => void) | null) => {
	const curried = (fn?: ((value: T) => void) | null) => (
		typeof fn === 'function' && void fn(value), value
	);

	return fn === undefined ? curried : (curried(fn) as typeof curried);
};

export default tap;
