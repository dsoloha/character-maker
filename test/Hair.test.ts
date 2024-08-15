import { Hair } from '../src/index'
import testCharacter from './testCharacter'

const defaultHair = new Hair()
const randomHair = new Hair().generate()
const givenHair = testCharacter.hair

// given

test('default hair color', () => {
  expect(defaultHair.arm.color).toBeDefined()
  expect(defaultHair.chest.color).toBeDefined()
  expect(defaultHair.face.color).toBeDefined()
  expect(defaultHair.head.color).toBeDefined()
  expect(defaultHair.leg.color).toBeDefined()
  expect(defaultHair.pubic.color).toBeDefined()
  expect(defaultHair.underarms.color).toBeDefined()
})

test('default hair length', () => {
  expect(defaultHair.arm.length).toBeDefined()
  expect(defaultHair.chest.length).toBeDefined()
  expect(defaultHair.face.length).toBeDefined()
  expect(defaultHair.head.length).toBeDefined()
  expect(defaultHair.leg.length).toBeDefined()
  expect(defaultHair.pubic.length).toBeDefined()
  expect(defaultHair.underarms.length).toBeDefined()
})

test('default hair style', () => {
  expect(defaultHair.arm.style).toBeDefined()
  expect(defaultHair.chest.style).toBeDefined()
  expect(defaultHair.face.style).toBeDefined()
  expect(defaultHair.head.style).toBeDefined()
  expect(defaultHair.leg.style).toBeDefined()
  expect(defaultHair.pubic.style).toBeDefined()
  expect(defaultHair.underarms.style).toBeDefined()
})

// random

test('random hair color', () => {
  expect(randomHair.arm?.color).toBeDefined()
  expect(randomHair.chest?.color).toBeDefined()
  expect(randomHair.face?.color).toBeDefined()
  expect(randomHair.head?.color).toBeDefined()
  expect(randomHair.leg?.color).toBeDefined()
  expect(randomHair.pubic?.color).toBeDefined()
  expect(randomHair.underarms?.color).toBeDefined()
})

test('random hair length', () => {
  expect(randomHair.arm?.length).toBeDefined()
  expect(randomHair.chest?.length).toBeDefined()
  expect(randomHair.face?.length).toBeDefined()
  expect(randomHair.head?.length).toBeDefined()
  expect(randomHair.leg?.length).toBeDefined()
  expect(randomHair.pubic?.length).toBeDefined()
  expect(randomHair.underarms?.length).toBeDefined()
})

test('random hair style', () => {
  expect(randomHair.arm?.style).toBeDefined()
  expect(randomHair.chest?.style).toBeDefined()
  expect(randomHair.face?.style).toBeDefined()
  expect(randomHair.head?.style).toBeDefined()
  expect(randomHair.leg?.style).toBeDefined()
  expect(randomHair.pubic?.style).toBeDefined()
  expect(randomHair.underarms?.style).toBeDefined()
})

// given

test('given hair color', () => {
  expect(givenHair.arm?.color).toBeDefined()
  expect(givenHair.chest?.color).toBeDefined()
  expect(givenHair.face?.color).toBeDefined()
  expect(givenHair.head?.color).toBeDefined()
  expect(givenHair.leg?.color).toBeDefined()
  expect(givenHair.pubic?.color).toBeDefined()
  expect(givenHair.underarms?.color).toBeDefined()
})

test('given hair length', () => {
  expect(givenHair.arm?.length).toBeDefined()
  expect(givenHair.chest?.length).toBeDefined()
  expect(givenHair.face?.length).toBeDefined()
  expect(givenHair.head?.length).toBeDefined()
  expect(givenHair.leg?.length).toBeDefined()
  expect(givenHair.pubic?.length).toBeDefined()
  expect(givenHair.underarms?.length).toBeDefined()
})

test('given hair style', () => {
  expect(givenHair.arm?.style).toBeDefined()
  expect(givenHair.chest?.style).toBeDefined()
  expect(givenHair.face?.style).toBeDefined()
  expect(givenHair.head?.style).toBeDefined()
  expect(givenHair.leg?.style).toBeDefined()
  expect(givenHair.pubic?.style).toBeDefined()
  expect(givenHair.underarms?.style).toBeDefined()
})
