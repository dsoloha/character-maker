import { Age } from '../src/index'

test('default birthday', () => {
  expect(new Age().birth.day).toBe(1)
})

test('given birth day', () => {
  expect(new Age({ birth: { day: 12 } }).birth.day).toBe(12)
})

test('given birth month', () => {
  expect(new Age({ birth: { month: 5 } }).birth.month).toBe(5)
})

test('given birth year', () => {
  expect(new Age({ birth: { year: 99 } }).birth.year).toBe(99)
})
