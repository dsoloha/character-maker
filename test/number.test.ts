import { gaussian, gaussianPair } from '../lib/number';

test('normal distribution', () => {
  expect(gaussian(1, 10)).toBeGreaterThanOrEqual(1)
  expect(gaussian(1, 10)).toBeLessThanOrEqual(10)
})

test('normal pair', () => {
  expect(gaussianPair(5, 5)).toHaveLength(2)
})
