/**
 * Check if `value` is `null`.
 *
 * @remarks
 *
 * The implementation of `nothing` uses equality operator (`==`) to check if
 * `value` is `null`.
 *
 * @param value - value to check
 * @returns `true` if value is nothing, `false` otherwise
 */
const nothing = <T>(value: T) => value == null;

export default nothing;
