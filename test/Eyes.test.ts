import { Eyes } from '../src/index'
import testCharacter from './testCharacter'

const defaultEyes = new Eyes()
const randomEyes = new Eyes().generate()
const givenEyes = testCharacter.eyes

// default

test('default eyes', () => {
  expect(defaultEyes.astigmatism).toBeDefined()
  expect(defaultEyes.colors.left).toBeDefined()
  expect(defaultEyes.colors.right).toBeDefined()
  expect(defaultEyes.farsighted).toBeDefined()
  expect(defaultEyes.nearsighted).toBeDefined()
})

// random

test('random eyes', () => {
  expect(randomEyes.astigmatism).toBeDefined()
  expect(randomEyes.colors?.left).toBeDefined()
  expect(randomEyes.colors?.right).toBeDefined()
  expect(randomEyes.farsighted).toBeDefined()
  expect(randomEyes.nearsighted).toBeDefined()
})

// given

test('given astigmatism', () => {
  expect(givenEyes.astigmatism).toBeDefined()
})

test('given eye colors', () => {
  expect(givenEyes.colors.left).toBeDefined()
  expect(givenEyes.colors.right).toBeDefined()
})

test('given farsightedness', () => {
  expect(givenEyes.farsighted).toBeDefined()
})

test('given nearsightedness', () => {
  expect(givenEyes.nearsighted).toBeDefined()
})
