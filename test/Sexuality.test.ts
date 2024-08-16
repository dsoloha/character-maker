import { Sexuality } from '../src/index'
import testCharacter from './testCharacter'

const femaleSexuality = new Sexuality('female')
const maleSexuality = new Sexuality('male')
const givenSexuality = testCharacter.sexuality

// female

test('female gender', () => {
  expect(femaleSexuality.gender).toBeDefined()
})

test('female attraction', () => {
  expect(femaleSexuality.attraction.female).toBeGreaterThanOrEqual(0)
  expect(femaleSexuality.attraction.female).toBeLessThanOrEqual(100)
  expect(femaleSexuality.attraction.male).toBeGreaterThanOrEqual(0)
  expect(femaleSexuality.attraction.male).toBeLessThanOrEqual(100)
})

// male

test('male gender', () => {
  expect(maleSexuality.gender).toBeDefined()
})

test('male attraction', () => {
  expect(maleSexuality.attraction.female).toBeGreaterThanOrEqual(0)
  expect(maleSexuality.attraction.female).toBeLessThanOrEqual(100)
  expect(maleSexuality.attraction.male).toBeGreaterThanOrEqual(0)
  expect(maleSexuality.attraction.male).toBeLessThanOrEqual(100)
})

// given

test('given gender', () => {
  expect(givenSexuality.gender).toBeDefined()
})

test('given attraction', () => {
  expect(givenSexuality.attraction.female).toBeGreaterThanOrEqual(0)
  expect(givenSexuality.attraction.female).toBeLessThanOrEqual(100)
  expect(givenSexuality.attraction.male).toBeGreaterThanOrEqual(0)
  expect(givenSexuality.attraction.male).toBeLessThanOrEqual(100)
})
