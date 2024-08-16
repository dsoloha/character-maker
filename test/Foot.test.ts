import { Foot } from '../src/index'

const defaultFoot = new Foot()
const randomFoot = new Foot().generate()
const givenFoot = new Foot({ toes: 5 })

// default

test('default foot', () => {
  expect(defaultFoot.toes).toBeGreaterThanOrEqual(0)
  expect(defaultFoot.toes).toBeLessThanOrEqual(5)
})

// random

test('random foot', () => {
  expect(randomFoot.toes).toBeGreaterThanOrEqual(0)
  expect(randomFoot.toes).toBeLessThanOrEqual(5)
})

// given

test('given foot', () => {
  expect(givenFoot.toes).toBeGreaterThanOrEqual(0)
  expect(givenFoot.toes).toBeLessThanOrEqual(5)
})
