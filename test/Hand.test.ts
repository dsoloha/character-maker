import { Hand } from '../src/index'

test('default hands', () => {
  expect(new Hand().fingers).toBe(5)
})

test('given hands', () => {
  expect(new Hand({ fingers: 3 }).fingers).toBe(3)
})
