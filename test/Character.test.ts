import { Character } from '../src/index'
import testCharacter from './testCharacter'

const defaultCharacter = new Character()
const randomCharacter = new Character().generate()
const givenCharacter = testCharacter

// default

test('default character age', () => {
  expect(new Character().age.birth.day).toBeGreaterThanOrEqual(1)
  expect(new Character().age.birth.day).toBeLessThanOrEqual(31)
  expect(new Character().age.birth.month).toBeGreaterThanOrEqual(1)
  expect(new Character().age.birth.month).toBeLessThanOrEqual(12)
  expect(new Character().age.birth.year).toBeGreaterThanOrEqual(1)
  expect(new Character().age.monthsOld).toBeGreaterThanOrEqual(0)
  expect(new Character().age.monthsOld).toBeLessThanOrEqual(1200)
})

test('default character background', () => {
  expect(defaultCharacter.background.birthplace).toBeDefined()
  expect(defaultCharacter.background.birthplace.city).not.toBeNull()
  expect(defaultCharacter.background.birthplace.country).not.toBeNull()
  expect(defaultCharacter.background.education).toBeDefined()
  expect(defaultCharacter.background.education.highestLevel).toBeDefined()
  expect(defaultCharacter.background.education.schools).toBeDefined()
  expect(defaultCharacter.background.nationality).toBeDefined()
  expect(defaultCharacter.background.occupation).toBeDefined()
  expect(defaultCharacter.background.occupation.income).toBeDefined()
  expect(defaultCharacter.background.occupation.length).toBeDefined()
  expect(defaultCharacter.background.occupation.type).toBeDefined()
})

test('default character eyes', () => {
  expect(new Character().eyes.astigmatism).toBe(false)
  expect(new Character().eyes.colors).toStrictEqual({ left: '', right: '' })
  expect(new Character().eyes.farsighted).toBe(false)
  expect(new Character().eyes.nearsighted).toBe(false)
})

test('default character hair', () => {
  expect(new Character().hair.arm.color).toBeDefined()
  expect(new Character().hair.arm.length).toBeDefined()
  expect(new Character().hair.arm.style).toBeDefined()
})

test('default character mouth', () => {
  expect(new Character().mouth.teeth).toEqual({ count: 32, description: '' })
  expect(new Character().mouth.tongue).toBe(true)
})

test('default character name', () => {
  expect(new Character().name.first).toBe('')
  expect(new Character().name.middle).toBeNull()
  expect(new Character().name.last).toBeNull()
  expect(new Character().name.full).toBe('')
  expect(new Character().name.nicknames).toHaveLength(0)
})

test('default character nose', () => {
  expect(new Character().nose.anosmia).toBe(false)
})

test('default character pronouns', () => {
  expect(new Character().pronouns.subject).toBeDefined()
  expect(new Character().pronouns.object).toBeDefined()
  expect(new Character().pronouns.possessive).toBeDefined()
  expect(new Character().pronouns.possessivePronoun).toBeDefined()
  expect(new Character().pronouns.noun).toBeDefined()
  expect(new Character().pronouns.reflexive).toBeDefined()
})

test('default character sex', () => {
  expect(new Character().sex.type).toBe('male')
})

test('default character skin', () => {
  expect(new Character().skin.birthmarks).toBeNull()
  expect(new Character().skin.brands).toBeNull()
  expect(new Character().skin.color).toBe('')
  expect(new Character().skin.scars).toBeNull()
  expect(new Character().skin.tattoos).toBeNull()
})

// random

test('random character age', () => {
  expect(randomCharacter.age?.birth?.day).toBeGreaterThanOrEqual(1)
  expect(randomCharacter.age?.birth?.day).toBeLessThanOrEqual(31)
  expect(randomCharacter.age?.birth?.month).toBeGreaterThanOrEqual(1)
  expect(randomCharacter.age?.birth?.month).toBeLessThanOrEqual(12)
  expect(randomCharacter.age?.birth?.year).toBeGreaterThanOrEqual(1)
})

test('random character background', () => {
  expect(randomCharacter.background?.birthplace).toBeDefined()
  expect(randomCharacter.background?.birthplace?.city).not.toBeNull()
  expect(randomCharacter.background?.birthplace?.country).not.toBeNull()
  expect(randomCharacter.background?.education).toBeDefined()
  expect(randomCharacter.background?.education?.highestLevel).toBeDefined()
  expect(randomCharacter.background?.education?.schools).toBeDefined()
  expect(randomCharacter.background?.occupation).toBeDefined()
  expect(randomCharacter.background?.occupation?.income).toBeDefined()
  expect(randomCharacter.background?.occupation?.length).toBeDefined()
  expect(randomCharacter.background?.occupation?.type).toBeDefined()
})

test('random character sex', () => {
  expect(new Character().sex.generateType()).toBeTruthy()
  expect(new Character().sex.generate().type).toBeTruthy()
  expect(new Character().generate().sex?.type).toBeTruthy()
})

// given

test('character with given age', () => {
  expect(givenCharacter.age.birth.day).toBeGreaterThanOrEqual(0)
  expect(givenCharacter.age.birth.day).toBeLessThanOrEqual(31)
  expect(givenCharacter.age.birth.month).toBeGreaterThanOrEqual(0)
  expect(givenCharacter.age.birth.month).toBeLessThanOrEqual(12)
  expect(givenCharacter.age.birth.year).toBeGreaterThanOrEqual(1)
})

test('character with given background', () => {
  expect(givenCharacter.background.birthplace).toBeDefined()
  expect(givenCharacter.background.education).toBeDefined()
  expect(givenCharacter.background.occupation).toBeDefined()
})

test('character with given build', () => {
  expect(givenCharacter.build.height).toBeGreaterThanOrEqual(0)
  expect(givenCharacter.build.height).toBeLessThanOrEqual(500)
  expect(givenCharacter.build.muscles).toBeGreaterThanOrEqual(0)
  expect(givenCharacter.build.muscles).toBeLessThanOrEqual(100)
  expect(givenCharacter.build.type).toBeDefined()
  expect(givenCharacter.build.weight).toBeGreaterThanOrEqual(0)
  expect(givenCharacter.build.weight).toBeLessThanOrEqual(1000)
})

test('character with given crotch', () => {
  expect(givenCharacter.crotch.anus.description).toBeDefined()
  expect(givenCharacter.crotch.ovaries).not.toBeNaN()
  expect(givenCharacter.crotch.penis).not.toBeNaN()
  expect(givenCharacter.crotch.testicles).not.toBeNaN()
  expect(givenCharacter.crotch.vagina).not.toBeNaN()
})

test('character with given eyes', () => {
  expect(givenCharacter.eyes.astigmatism).toBeDefined()
  expect(givenCharacter.eyes.colors.left).toBeDefined()
  expect(givenCharacter.eyes.colors.right).toBeDefined()
  expect(givenCharacter.eyes.farsighted).toBeDefined()
  expect(givenCharacter.eyes.nearsighted).toBeDefined()
})

test('character with given hair color', () => {
  expect(givenCharacter.hair.arm.color).toBeDefined()
  expect(givenCharacter.hair.chest.color).toBeDefined()
  expect(givenCharacter.hair.face.color).toBeDefined()
  expect(givenCharacter.hair.head.color).toBeDefined()
  expect(givenCharacter.hair.leg.color).toBeDefined()
  expect(givenCharacter.hair.pubic.color).toBeDefined()
})

test('character with given hair length', () => {
  expect(givenCharacter.hair.arm.length).toBeDefined()
  expect(givenCharacter.hair.chest.length).toBeDefined()
  expect(givenCharacter.hair.face.length).toBeDefined()
  expect(givenCharacter.hair.head.length).toBeDefined()
  expect(givenCharacter.hair.leg.length).toBeDefined()
  expect(givenCharacter.hair.pubic.length).toBeDefined()
})

test('character with given hair style', () => {
  expect(givenCharacter.hair.arm.style).toBeDefined()
  expect(givenCharacter.hair.chest.style).toBeDefined()
  expect(givenCharacter.hair.face.style).toBeDefined()
  expect(givenCharacter.hair.head.style).toBeDefined()
  expect(givenCharacter.hair.leg.style).toBeDefined()
  expect(givenCharacter.hair.pubic.style).toBeDefined()
})

test('character with given health', () => {
  expect(givenCharacter.health.illnesses).toBeDefined()
  expect(givenCharacter.health.injuries).toBeDefined()
})

test('character with given mouth', () => {
  expect(givenCharacter.mouth.teeth.count).toBeGreaterThanOrEqual(0)
  expect(givenCharacter.mouth.teeth.count).toBeLessThanOrEqual(32)
})

test('character with given name', () => {
  expect(givenCharacter.name.first).toBeDefined()
  expect(givenCharacter.name.full).toBeDefined()
  expect(givenCharacter.name.middle).toBeDefined()
  expect(givenCharacter.name.last).toBeDefined()
})

test('character with given neck', () => {
  expect(givenCharacter.neck.larynx).toBeDefined()
})

test('character with given nose', () => {
  expect(givenCharacter.nose.anosmia).toBeDefined()
})

test('character with given sex', () => {
  expect(givenCharacter.sex.type).toBeDefined()
  expect(givenCharacter.pronouns.subject).toBeDefined()
  expect(givenCharacter.pronouns.object).toBeDefined()
  expect(givenCharacter.pronouns.possessive).toBeDefined()
  expect(givenCharacter.pronouns.possessivePronoun).toBeDefined()
  expect(givenCharacter.pronouns.noun).toBeDefined()
  expect(givenCharacter.pronouns.reflexive).toBeDefined()
})

test('character with given skin color', () => {
  expect(givenCharacter.skin.color).toBeDefined()
})

test('character with given stomach', () => {})

test('character with given waist', () => {})
