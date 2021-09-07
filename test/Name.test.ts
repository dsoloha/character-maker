import { Name } from '../src/index'

test('default first name', () => {
  expect(new Name().first).toBe('')
})

test('given first name', () => {
  expect(new Name({ first: 'John' }).first).toBe('John')
})

test('given middle name', () => {
  expect(new Name({ middle: 'A' }).middle).toBe('A')
})

test('given last name', () => {
  expect(new Name({ last: 'Smith' }).last).toBe('Smith')
})

test('given nicknames', () => {
  expect(new Name({ nicknames: ['Johnny']}).nicknames).toContain('Johnny')
})
