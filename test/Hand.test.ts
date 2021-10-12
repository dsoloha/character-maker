import { Hand } from '../src/index'

test('default hands', () => {
  expect(new Hand().fingers).toBe(5)
  expect(new Hand().fingers).toBe(5)
})
