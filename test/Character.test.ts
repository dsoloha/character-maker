import { Character } from '../src/index'

// default
test('default character', () => {
  expect(new Character().age.birth.day).toBe(1)
})

// age
test('character with given age', () => {
  expect(new Character({ age: { birth: { day: 29 } } }).age.birth.day).toBe(29)
})

// background
test('character with given background', () => {
  expect(new Character({ background: { birthplace: 'London' } }).background.birthplace).toBe('London')
})

// eyes
test('character with given eye color', () => {
  expect(new Character({ eyes: { color: 'blue' } }).eyes.color).toBe('blue')
  expect(new Character({ eyes: { color: { left: 'blue', right: 'green' } } }).eyes.color).toStrictEqual({ left: 'blue', right: 'green' })
})

// hair
test('character with given hair color', () => {
  expect(new Character({hair: { color: 'brown'}}).hair.color).toBe('brown')
})

test('character with given hair length', () => {
  expect(new Character({hair: { length: 25 }}).hair.length).toBe(25)
})

// name
test('character with given name', () => {
  expect(new Character({ name: {first: 'John', last: 'Smith'}}).name.first).toBe('John')
})
