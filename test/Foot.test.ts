import { Foot } from '../src/index'

test('default feet', () => {
  expect(new Foot().toes).toBe(5)
})

test('given feet', () => {
  expect(new Foot({ toes: 3 }).toes).toBe(3)
})
