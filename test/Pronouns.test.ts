import { Pronouns } from '../src/index'

test('default subject', () => {
  expect(new Pronouns('male').subject).toBe('he')
  expect(new Pronouns('female').he).toBe('she')
  expect(new Pronouns('plural').He).toBe('They')
  expect(new Pronouns('neuter').she).toBe('it')
  expect(new Pronouns('male').She).toBe('He')
})

test('default object', () => {
  expect(new Pronouns('male').Him).toBe('Him')
  expect(new Pronouns('female').object).toBe('her')
  expect(new Pronouns('plural').him).toBe('them')
  expect(new Pronouns('neuter').Her).toBe('It')
})

test('default possessive', () => {
  expect(new Pronouns('male').His).toBe('His')
  expect(new Pronouns('female').hers).toBe('her')
  expect(new Pronouns('plural').possessive).toBe('their')
  expect(new Pronouns('neuter').his).toBe('its')
  expect(new Pronouns('male').Hers).toBe('His')
})

test('default possessivePronoun', () => {
  expect(new Pronouns('neuter').possessivePronoun).toBe('its')
})

test('default noun', () => {
  expect(new Pronouns('male').noun).toBe('man')
})

test('default reflexive', () => {
  expect(new Pronouns('male').himself).toBe('himself')
  expect(new Pronouns('female').reflexive).toBe('herself')
  expect(new Pronouns('plural').himself).toBe('themselves')
  expect(new Pronouns('neuter').Herself).toBe('Itself')
  expect(new Pronouns('male').Himself).toBe('Himself')
})
