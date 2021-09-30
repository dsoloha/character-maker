import { Name } from '../src/index'

test('default first name', () => {
  expect(new Name().first).toBe('')
})

test('given first name', () => {
  expect(new Name({ first: 'John' }).first).toBe('John')
  expect(new Name({ first: 'John' }).full).toBe('John')
})

test('given middle name', () => {
  expect(new Name({ middle: 'A' }).middle).toBe('A')
  expect(new Name({ middle: 'A' }).full).toBe('A')
})

test('given last name', () => {
  expect(new Name({ last: 'Smith' }).last).toBe('Smith')
  expect(new Name({ last: 'Smith' }).full).toBe('Smith')
})

test('given full name', () => {
  expect(new Name({ first: 'John', middle: 'A', last: 'Smith' }).full).toBe('John A Smith')
})

test('given nicknames', () => {
  expect(new Name({ nicknames: ['Johnny']}).nicknames).toContain('Johnny')
})
