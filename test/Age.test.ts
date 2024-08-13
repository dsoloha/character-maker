import { Age } from '../src/index'

test('default birthday', () => {
  expect(new Age().birth.day).toBeGreaterThanOrEqual(1)
  expect(new Age().birth.day).toBeLessThanOrEqual(31)
  expect(new Age({ birth: { month: 2 } }).birth.day).toBeLessThanOrEqual(28)
  expect(new Age({ birth: { month: 6 } }).birth.day).toBeLessThanOrEqual(30)
  expect(new Age().birth.month).toBeGreaterThanOrEqual(1)
  expect(new Age().birth.month).toBeLessThanOrEqual(12)
  expect(new Age().birth.year).toBeGreaterThanOrEqual(1)
})

test('random birthday', () => {
  expect(new Age().generate().birth?.day).toBeGreaterThanOrEqual(1)
  expect(new Age().generate().birth?.day).toBeLessThanOrEqual(31)
  expect(new Age().generate().birth?.month).toBeGreaterThanOrEqual(1)
  expect(new Age().generate().birth?.month).toBeLessThanOrEqual(12)
  expect(new Age().generate().birth?.year).toBeGreaterThanOrEqual(0)
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
