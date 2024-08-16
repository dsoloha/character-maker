import { Nose } from '../src/index'
import testCharacter from './testCharacter'

const defaultNose = new Nose()
const randomNose = new Nose().generate()
const givenNose = testCharacter.nose

// default

test('default nose', () => {
  expect(defaultNose.anosmia).toBeDefined()
})

// random

test('random nose', () => {
  expect(randomNose.anosmia).toBeDefined()
})

// given

test('given nose', () => {
  expect(givenNose.anosmia).toBeDefined()
})
