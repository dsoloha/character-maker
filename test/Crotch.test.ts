import { Crotch } from '../src/index'
import testCharacter from './testCharacter'
import { SexType } from '../src/Sex'

const sexes: SexType[] = ['male', 'female']
const randomSex = sexes.random()

const defaultCrotch = new Crotch()
const randomCrotch = new Crotch().generate(randomSex)
const givenCrotch = testCharacter.crotch

// default

test('default anus', () => {
  expect(defaultCrotch.anus).toBeObject()
})

test('default ovaries', () => {
  expect(defaultCrotch.ovaries).toBeNil()
})

test('default penis', () => {
  expect(defaultCrotch.penis).toBeNil()
})

test('default testicles', () => {
  expect(defaultCrotch.testicles).toBeNil()
})

test('default vagina', () => {
  expect(defaultCrotch.vagina).toBeNil()
})

// random

test('random anus', () => {
  expect(randomCrotch.anus).toBeObject()
})

test('random ovaries', () => {
  if (randomSex === 'male') {
    expect(randomCrotch.ovaries).toBeNil()
  }
  if (randomSex === 'female') {
    expect(randomCrotch.ovaries).toBeObject()
  }
})

test('random penis', () => {
  if (randomSex === 'male') {
    expect(randomCrotch.penis).toBeObject()
  }
  if (randomSex === 'female') {
    expect(randomCrotch.penis).toBeNil()
  }
})

test('random testicles', () => {
  if (randomSex === 'male') {
    expect(randomCrotch.testicles).toBeObject()
  }
  if (randomSex === 'female') {
    expect(randomCrotch.testicles).toBeNil()
  }
})

test('random vagina', () => {
  if (randomSex === 'male') {
    expect(randomCrotch.vagina).toBeNil()
  }
  if (randomSex === 'female') {
    expect(randomCrotch.vagina).toBeObject()
  }
})

// given

test('given anus', () => {
  expect(givenCrotch.anus).toBeObject()
})

test('given ovaries', () => {
  expect(givenCrotch.ovaries).toBeObject()
})

test('given penis', () => {
  expect(givenCrotch.penis).toBeObject()
})

test('given testicles', () => {
  expect(givenCrotch.testicles).toBeObject()
})

test('given vagina', () => {
  expect(givenCrotch.vagina).toBeObject()
})
