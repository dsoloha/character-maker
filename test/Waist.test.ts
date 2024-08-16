import { Waist } from '../src/index'
import testCharacter from './testCharacter'

const defaultWaist = new Waist()
const randomWaist = new Waist().generate()
const givenWaist = testCharacter.waist

// default

test('default waist', () => {
  expect(defaultWaist.size).toBeDefined()
})

// random

test('random waist', () => {
  expect(randomWaist.size).toBeDefined()
})

// given

test('given waist', () => {
  expect(givenWaist.size).toBeDefined()
})
