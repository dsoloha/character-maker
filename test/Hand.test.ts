import { Hand } from '../src/index'

const defaultHand = new Hand()
const randomHand = new Hand().generate()
const givenHand = new Hand({ fingers: 5 })

// default

test('default hand', () => {
  expect(defaultHand.fingers).toBeGreaterThanOrEqual(0)
  expect(defaultHand.fingers).toBeLessThanOrEqual(5)
})

// random

test('random hand', () => {
  expect(randomHand.fingers).toBeGreaterThanOrEqual(0)
  expect(randomHand.fingers).toBeLessThanOrEqual(5)
})

// given

test('given hand', () => {
  expect(givenHand.fingers).toBeGreaterThanOrEqual(0)
  expect(givenHand.fingers).toBeLessThanOrEqual(5)
})
