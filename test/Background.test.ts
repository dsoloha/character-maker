import { Background } from '../src/index'
import testCharacter from './testCharacter'

const defaultBackground = new Background()
const randomBackground = new Background().generate()
const givenBackground = testCharacter.background

test('default birthplace', () => {
  expect(defaultBackground.birthplace.city).toBeDefined()
  expect(defaultBackground.birthplace.country).toBeDefined()
  //  expect(defaultBackground.nationality).toBeDefined() TODO: get this to work correctly
})

test('random birthplace', () => {
  expect(randomBackground.birthplace).toBeDefined()
  expect(randomBackground.birthplace?.city).toBeDefined()
  expect(randomBackground.birthplace?.country).toBeDefined()
})

test('given birthplace', () => {
  expect(givenBackground.birthplace.city).toBe('Kyiv')
  expect(givenBackground.birthplace.country).toBe('Ukraine')
  //  expect(background.nationality).toBe('Ukrainian')  TODO: get this to work correctly
})

test('default education', () => {
  expect(defaultBackground.education.highestLevel).toBeDefined()
  expect(defaultBackground.education.schools).toBeDefined()
})

test('given education', () => {
  expect(givenBackground.education.highestLevel).toBeDefined()
  expect(givenBackground.education.schools).toBeDefined()
})

test('default occupation', () => {
  expect(defaultBackground.occupation.income).toBeDefined()
  expect(defaultBackground.occupation.length).toBeDefined()
  expect(defaultBackground.occupation.type).toBeDefined()
})

test('given occupation', () => {
  expect(givenBackground.occupation.income).toBeDefined()
  expect(givenBackground.occupation.length).toBeDefined()
  expect(givenBackground.occupation.type).toBeDefined()
})
