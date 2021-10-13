import { Chest } from '../src/index'

test('default chest', () => {
  expect(new Chest().size).toBe('')
})

test('given chest size', () => {
  expect(new Chest({ size: 'small' }).size).toBe('small')
})
