import { Name } from '../src/index'
import testCharacter from './testCharacter'

const defaultName = new Name()
const randomName = new Name().generate()
const givenName = testCharacter.name

// default

test('default first name', () => {
  expect(defaultName.first).toBeDefined()
})

test('default middle name', () => {
  expect(defaultName.middle).toBeDefined()
})

test('default last name', () => {
  expect(defaultName.last).toBeDefined()
})

test('default full name', () => {
  expect(defaultName.full).toBeDefined()
})

test('default nicknames', () => {
  expect(defaultName.nicknames).toBeDefined()
})

// random

test('random first name', () => {
  expect(randomName.first).toBeDefined()
})

test('random middle name', () => {
  expect(randomName.middle).toBeDefined()
})

test('random last name', () => {
  expect(randomName.last).toBeDefined()
})

test('random nicknames', () => {
  expect(randomName.nicknames).toBeDefined()
})

// given

test('given first name', () => {
  expect(givenName.first).toBeDefined()
})

test('given middle name', () => {
  expect(givenName.middle).toBeDefined()
})

test('given last name', () => {
  expect(givenName.last).toBeDefined()
})

test('given full name', () => {
  expect(givenName.full).toBeDefined()
})

test('given nicknames', () => {
  expect(givenName.nicknames).toBeDefined()
})
