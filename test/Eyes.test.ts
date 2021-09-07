import { Eyes } from '../src/index'

test('default eyes', () => {
  expect(new Eyes().color).toBe('blue')
})
