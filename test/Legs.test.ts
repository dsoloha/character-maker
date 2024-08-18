import { Legs } from '../src/index'
import testCharacter from './testCharacter'

const defaultLegs = new Legs()
const randomLegs = new Legs().generate()
const givenLegs = testCharacter.legs

// default

test('default leg size', () => {
  expect(defaultLegs.left.size).toBeDefined()
  expect(defaultLegs.right.size).toBeDefined()
})

// random

test('random leg size', () => {
  expect(randomLegs.left?.size).toBeDefined()
  expect(randomLegs.right?.size).toBeDefined()
})

// given

test('given leg size', () => {
  expect(givenLegs?.left.size).toBeNil()
  expect(givenLegs?.right.size).toBeNil()
})
