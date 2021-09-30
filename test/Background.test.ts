import { Background } from '../src/index'

test('default birthplace', () => {
  expect(new Background().birthplace).toBe('')
})

test('given birthplace', () => {
  expect(new Background({birthplace: 'London'}).birthplace).toBe('London')
})

test('given nationality', () => {
  expect(new Background({nationality: 'English'}).nationality).toBe('English')
})
