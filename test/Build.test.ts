import { Build } from '../src/index'
import testCharacter from './testCharacter'

const defaultBuild = new Build()
const randomBuild = new Build().generate()
const givenBuild = testCharacter.build

// default

test('default height', () => {
  expect(defaultBuild.height).toBeGreaterThanOrEqual(0)
  expect(defaultBuild.height).toBeLessThanOrEqual(500)
})

test('default muscles', () => {
  expect(defaultBuild.muscles).toBeGreaterThanOrEqual(0)
  expect(defaultBuild.muscles).toBeLessThanOrEqual(100)
})

test('default type', () => {
  expect(defaultBuild.type).toBeDefined()
})

test('default weight', () => {
  expect(defaultBuild.weight).toBeGreaterThanOrEqual(0)
  expect(defaultBuild.weight).toBeLessThanOrEqual(1000)
})

// random

test('random height', () => {
  expect(randomBuild.height).toBeGreaterThanOrEqual(0)
  expect(randomBuild.height).toBeLessThanOrEqual(500)
})

test('random muscles', () => {
  expect(randomBuild.muscles).toBeGreaterThanOrEqual(0)
  expect(randomBuild.muscles).toBeLessThanOrEqual(100)
})

test('random type', () => {
  expect(randomBuild.type).toBeDefined()
})

test('random weight', () => {
  expect(randomBuild.weight).toBeGreaterThanOrEqual(0)
  expect(randomBuild.weight).toBeLessThanOrEqual(1000)
})

// given

test('given height', () => {
  expect(givenBuild.height).toBeGreaterThanOrEqual(0)
  expect(givenBuild.height).toBeLessThanOrEqual(500)
})

test('given muscles', () => {
  expect(givenBuild.muscles).toBeGreaterThanOrEqual(0)
  expect(givenBuild.muscles).toBeLessThanOrEqual(100)
})

test('given type', () => {
  expect(givenBuild.type).toBeDefined()
})

test('given weight', () => {
  expect(givenBuild.weight).toBeGreaterThanOrEqual(0)
  expect(givenBuild.weight).toBeLessThanOrEqual(1000)
})
