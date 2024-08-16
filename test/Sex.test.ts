import { Sex } from '../src/index'
import testCharacter from './testCharacter'

const defaultSex = new Sex()
const randomSex = new Sex().generate()
const givenSex = testCharacter.sex

// default

test('default sex', () => {
  expect(defaultSex.type).toBeDefined()
})

// random

test('random sex', () => {
  expect(randomSex.type).toBeDefined()
})

// given

test('given sex', () => {
  expect(givenSex.type).toBeDefined()
})
