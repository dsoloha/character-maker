import { Pronouns } from '../src/index'

const femalePronouns = new Pronouns('female')
const malePronouns = new Pronouns('male')

// female

test('female noun', () => {
  expect(femalePronouns.noun).toBe('woman')
})

test('female object', () => {
  expect(femalePronouns.object).toBe('her')
  expect(femalePronouns.her).toBe('her')
  expect(femalePronouns.Her).toBe('Her')
})

test('female possessive', () => {
  expect(femalePronouns.hers).toBe('her')
  expect(femalePronouns.Hers).toBe('Her')
})

test('female possessivePronoun', () => {
  expect(femalePronouns.possessivePronoun).toBe('hers')
})

test('female reflexive', () => {
  expect(femalePronouns.reflexive).toBe('herself')
})

test('female subject', () => {
  expect(femalePronouns.subject).toBe('she')
  expect(femalePronouns.she).toBe('she')
  expect(femalePronouns.She).toBe('She')
})

// male

test('male noun', () => {
  expect(malePronouns.noun).toBe('man')
})

test('male object', () => {
  expect(malePronouns.object).toBe('him')
  expect(malePronouns.him).toBe('him')
  expect(malePronouns.Him).toBe('Him')
})

test('male possessive', () => {
  expect(malePronouns.his).toBe('his')
  expect(malePronouns.His).toBe('His')
})

test('male possessivePronoun', () => {
  expect(malePronouns.possessivePronoun).toBe('his')
})

test('male reflexive', () => {
  expect(malePronouns.reflexive).toBe('himself')
})

test('male subject', () => {
  expect(malePronouns.subject).toBe('he')
  expect(malePronouns.he).toBe('he')
  expect(malePronouns.He).toBe('He')
})
