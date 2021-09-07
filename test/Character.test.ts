import { Character } from '../src/index'

test('default character', () => {
  expect(new Character()).toStrictEqual(new Character())
})
