import { Neck } from '../src/index'
import testCharacter from './testCharacter'

const defaultNeck = new Neck()
const randomNeck = new Neck()
const givenNeck = testCharacter.neck

// default

test('default neck', () => {
  expect(defaultNeck.larynx).toBeDefined()
})

// random

test('random neck', () => {
  expect(randomNeck.larynx).toBeDefined()
})

// given

test('given neck', () => {
  expect(givenNeck.larynx).toBeDefined()
})
