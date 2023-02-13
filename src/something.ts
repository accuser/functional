/**
 * Check if `value` is not `null`.
 *
 * @remarks
 *
 * The implementation of `something` uses the inequality operator (`!=`) to
 * check if `value` is not `null`.
 *
 * @param value - value to check
 * @returns `true` if value is something, `false` otherwise
 */
const something = <T>(value: T) => value != null;

export default something;
