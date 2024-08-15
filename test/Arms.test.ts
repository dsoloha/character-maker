import { Arms } from '../src/index'
import testCharacter from './testCharacter'

const defaultArms = new Arms()
const randomArms = new Arms().generate(20)
const givenArms = testCharacter.arms

test('default arm size', () => {
  expect(defaultArms.left.size).toBeDefined()
  expect(defaultArms.right.size).toBeDefined()
})

test('random arm size', () => {
  expect(randomArms.left?.size).toBeDefined()
  expect(randomArms.right?.size).toBeDefined()
})

test('given arm size', () => {
  expect(givenArms?.left.size).toBeDefined()
  expect(givenArms?.right.size).toBeDefined()
})
