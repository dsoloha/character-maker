import { Age } from '../src/index'

test('default birthday', () => {
  expect(new Age().birth.day).toBe(1)
})

test('given birthday', () => {
  expect(new Age({birth: {day: 12}}).birth.day).toBe(12)
})
