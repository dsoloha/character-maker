import { Skin } from '../src/index'
import testCharacter from './testCharacter'

const defaultSkin = new Skin()
const randomSkin = new Skin().generate()
const givenSkin = testCharacter.skin

// default

test('default skin', () => {
  expect(defaultSkin.birthmarks).toBeDefined()
  expect(defaultSkin.brands).toBeDefined()
  expect(defaultSkin.color).toBeDefined()
  expect(defaultSkin.markings).toBeDefined()
  expect(defaultSkin.scars).toBeDefined()
  expect(defaultSkin.tattoos).toBeDefined()
})

// random

test('random skin', () => {
  expect(randomSkin.birthmarks).toBeDefined()
  expect(randomSkin.brands).toBeDefined()
  expect(randomSkin.color).toBeDefined()
  expect(randomSkin.markings).toBeDefined()
  expect(randomSkin.scars).toBeDefined()
  expect(randomSkin.tattoos).toBeDefined()
})

// given

test('given skin', () => {
  expect(givenSkin.birthmarks).toBeDefined()
  expect(givenSkin.brands).toBeDefined()
  expect(givenSkin.color).toBeDefined()
  expect(givenSkin.markings).toBeDefined()
  expect(givenSkin.scars).toBeDefined()
  expect(givenSkin.tattoos).toBeDefined()
})
