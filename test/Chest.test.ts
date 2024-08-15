import { Chest } from '../src/index'
import testCharacter from './testCharacter'

const defaultChest = new Chest()
const randomChest = new Chest()
const givenChest = testCharacter.chest

// default

test('default chest', () => {
  expect(defaultChest.size).toBeDefined()
})

// random

test('character with random chest', () => {
  expect(randomChest.size).toBeDefined()
})

// given

test('given chest size', () => {
  expect(givenChest.size).toBeDefined()
})
