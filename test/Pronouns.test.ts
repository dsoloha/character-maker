import { Pronouns } from '../src/index'

test('default subject', () => {
  expect(new Pronouns('male').subject).toBe('he')
  expect(new Pronouns('female').he).toBe('she')
  expect(new Pronouns('male').She).toBe('He')
})

test('default object', () => {
  expect(new Pronouns('male').Him).toBe('Him')
  expect(new Pronouns('female').object).toBe('her')
})

test('default possessive', () => {
  expect(new Pronouns('male').His).toBe('His')
  expect(new Pronouns('female').hers).toBe('her')
  expect(new Pronouns('male').Hers).toBe('His')})

test('default possessivePronoun', () => {
  expect(new Pronouns('male').possessivePronoun).toBe('his')
})

test('default noun', () => {
  expect(new Pronouns('male').noun).toBe('man')
})

test('default reflexive', () => {
  expect(new Pronouns('male').himself).toBe('himself')
  expect(new Pronouns('female').reflexive).toBe('herself')

  expect(new Pronouns('male').Himself).toBe('Himself')
})
