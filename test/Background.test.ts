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

test('given school', () => {
  expect(new Background({education: {school: 'Oxford'}}).education.school).toBe('Oxford')
})

test('given education length', () => {
  expect(new Background({education: {length: 4}}).education.length).toBe(4)
})
