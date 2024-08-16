import { Health } from '../src/index'
import testCharacter from './testCharacter'

const defaultHealth = new Health()
const randomHealth = new Health().generate()
const givenHealth = testCharacter.health

// default

test('default health', () => {
  expect(defaultHealth.illnesses).toBeDefined()
  expect(defaultHealth.injuries).toBeDefined()
})

// random

test('random health', () => {
  expect(randomHealth.illnesses).toBeDefined()
  expect(randomHealth.injuries).toBeDefined()
})

// given

test('given health', () => {
  expect(givenHealth.illnesses).toBeDefined()
  expect(givenHealth.injuries).toBeDefined()
})
