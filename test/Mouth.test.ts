import { Mouth } from '../src/index'
import testCharacter from './testCharacter'

const defaultMouth = new Mouth()
const randomMouth = new Mouth().generate()
const givenMouth = testCharacter.mouth

// default

test('default teeth', () => {
  expect(defaultMouth.teeth.count).toBeGreaterThanOrEqual(0)
  expect(defaultMouth.teeth.count).toBeLessThanOrEqual(32)
  expect(defaultMouth.teeth.description).toBeDefined()
})

test('default tongue', () => {
  expect(defaultMouth.tongue).toBeDefined()
})

// random

test('random teeth', () => {
  expect(randomMouth.teeth?.count).toBeGreaterThanOrEqual(0)
  expect(randomMouth.teeth?.count).toBeLessThanOrEqual(32)
  expect(randomMouth.teeth?.description).toBeDefined()
})

test('random tongue', () => {
  expect(randomMouth.tongue).toBeDefined()
})

//given

test('given teeth', () => {
  expect(givenMouth.teeth?.count).toBeGreaterThanOrEqual(0)
  expect(givenMouth.teeth?.count).toBeLessThanOrEqual(32)
  expect(givenMouth.teeth?.description).toBeDefined()
})

test('given tongue', () => {
  expect(givenMouth.tongue).toBeDefined()
})
