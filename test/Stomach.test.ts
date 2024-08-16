import { Stomach } from '../src/index'
import testCharacter from './testCharacter'

const defaultStomach = new Stomach()
const randomStomach = new Stomach().generate()
const givenStomach = testCharacter.stomach

// default

test('default stomach', () => {
  expect(defaultStomach.shape).toBeDefined()
})

// random

test('random stomach', () => {
  expect(randomStomach.shape).toBeDefined()
})

// given

test('given stomach', () => {
  expect(givenStomach.shape).toBeDefined()
})
