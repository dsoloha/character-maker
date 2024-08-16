import { Age } from '../src/index'
import testCharacter from './testCharacter'

const defaultAge = new Age()
const randomAge = new Age().generate()
const givenAge = testCharacter.age

test('default birthday', () => {
  expect(defaultAge.birth.day).toBeGreaterThanOrEqual(1)
  expect(defaultAge.birth.day).toBeLessThanOrEqual(31)
  expect(new Age({ birth: { month: 2 } }).birth.day).toBeLessThanOrEqual(28)
  expect(new Age({ birth: { month: 6 } }).birth.day).toBeLessThanOrEqual(31)
  expect(defaultAge.birth.month).toBeGreaterThanOrEqual(1)
  expect(defaultAge.birth.month).toBeLessThanOrEqual(12)
  expect(defaultAge.birth.year).toBeGreaterThanOrEqual(0)
})

test('random birthday', () => {
  expect(randomAge.birth?.day).toBeGreaterThanOrEqual(1)
  expect(randomAge.birth?.day).toBeLessThanOrEqual(31)
  expect(randomAge.birth?.month).toBeGreaterThanOrEqual(1)
  expect(randomAge.birth?.month).toBeLessThanOrEqual(12)
  expect(randomAge.birth?.year).toBeGreaterThanOrEqual(0)
})

test('given birth day', () => {
  expect(givenAge.birth.day).toBeGreaterThanOrEqual(1)
  expect(givenAge.birth.day).toBeLessThanOrEqual(31)
})

test('given birth month', () => {
  expect(givenAge.birth.month).toBeGreaterThanOrEqual(1)
  expect(givenAge.birth.month).toBeLessThanOrEqual(12)
})

test('given birth year', () => {
  expect(givenAge.birth.year).toBeGreaterThanOrEqual(0)
})
