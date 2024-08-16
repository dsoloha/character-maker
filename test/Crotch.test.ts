import { Crotch } from '../src/index'
import testCharacter from './testCharacter'

const defaultCrotch = new Crotch()
const randomCrotch = new Crotch().generate()
const givenCrotch = testCharacter.crotch

// default

test('default anus', () => {
  expect(defaultCrotch.anus).toBeDefined()
})

test('default ovaries', () => {
  expect(defaultCrotch.ovaries).not.toBeNaN()
})

test('default penis', () => {
  expect(defaultCrotch.penis).not.toBeNaN()
})

test('default testicles', () => {
  expect(defaultCrotch.testicles).not.toBeNaN()
})

test('default vagina', () => {
  expect(defaultCrotch.vagina).not.toBeNaN()
})

// random

test('random anus', () => {
  expect(randomCrotch.anus?.description).toBeDefined()
})

test('random ovaries', () => {
  expect(randomCrotch.ovaries).not.toBeNaN()
})

test('random penis', () => {
  expect(randomCrotch.penis).not.toBeNaN()
})

test('random testicles', () => {
  expect(randomCrotch.testicles).not.toBeNaN()
})

test('random vagina', () => {
  expect(randomCrotch.vagina).not.toBeNaN()
})

// given

test('given anus', () => {
  expect(givenCrotch.anus).toBeDefined()
})

test('given ovaries', () => {
  expect(givenCrotch.ovaries).not.toBeNaN()
})

test('given penis', () => {
  expect(givenCrotch.penis).not.toBeNaN()
})

test('given testicles', () => {
  expect(givenCrotch.testicles).not.toBeNaN()
})

test('given vagina', () => {
  expect(givenCrotch.vagina).not.toBeNaN()
})
