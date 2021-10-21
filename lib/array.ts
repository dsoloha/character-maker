/**
 * Returns a random member from the given array.
 *
 * Does not modify the original array.
 */
export function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}
