type Head<T extends ((...args: any) => any)[]> = T extends [infer U, ...infer _]
	? U
	: any;

type Tail<T extends ((...args: any) => any)[]> = T extends [...infer _, infer U]
	? U
	: any;

type Maybe<T> = T | void;
