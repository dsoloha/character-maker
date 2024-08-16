import { Shoulders } from '../src/index'
import testCharacter from './testCharacter'

const defaultShoulders = new Shoulders()
const randomShoulders = new Shoulders().generate()
const givenShoulders = testCharacter.shoulders

// default

test('default shoulders', () => {
  expect(defaultShoulders.width).toBeDefined()
})

// random

test('random shoulders', () => {
  expect(randomShoulders.width).toBeDefined()
})

// given

test('given shoulders', () => {
  expect(givenShoulders.width).toBeDefined()
})
