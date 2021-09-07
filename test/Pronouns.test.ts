import { Pronouns } from '../src/index'

test('default male pronouns', () => {
  expect(new Pronouns('male').He).toBe('He')
})

test('default subject', () => {
  expect(new Pronouns('male').subject).toBe('he')
})

test('default object', () => {
  expect(new Pronouns('female').object).toBe('her')
})

test('default possessive', () => {
  expect(new Pronouns('plural').possessive).toBe('their')
})

test('default possessivePronoun', () => {
  expect(new Pronouns('neuter').possessivePronoun).toBe('its')
})

test('default noun', () => {
  expect(new Pronouns('male').noun).toBe('man')
})

test('default reflexive', () => {
  expect(new Pronouns('female').reflexive).toBe('herself')
})
