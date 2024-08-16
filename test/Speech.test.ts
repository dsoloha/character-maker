import { Speech } from '../src/index'
import testCharacter from './testCharacter'

const defaultSpeech = new Speech()
const randomSpeech = new Speech().generate()
const givenSpeech = testCharacter.speech

// default

test('default speech', () => {
  expect(defaultSpeech.style).toBeDefined()
})

// random

test('random speech', () => {
  expect(randomSpeech.style).toBeDefined()
})

// given

test('given speech', () => {
  expect(givenSpeech.style).toBeDefined()
})
