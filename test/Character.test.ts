import { Character } from '../src/index'

// default
test('default character', () => {
  expect(new Character().age.birth.day).toBe(1)
  expect(new Character().age.birth.month).toBe(1)
  expect(new Character().age.birth.year).toBe(1)

  expect(new Character().background.birthplace).toBe('')
  expect(new Character().background.education).toBeNull()
  expect(new Character().background.nationality).toBe('')
  expect(new Character().background.occupation).toEqual({ type: '', income: 0, length: 0 })

  expect(new Character().eyes.astigmatism).toBe(false)
  expect(new Character().eyes.color).toBe('')
  expect(new Character().eyes.colors).toEqual({ right: '', left: '' })
  expect(new Character().eyes.farsighted).toBe(false)
  expect(new Character().eyes.nearsighted).toBe(false)

  expect(new Character().hair.arm.color).toBe('')
  expect(new Character().hair.arm.length).toBe('')
  expect(new Character().hair.arm.style).toBe('')

  expect(new Character().name.first).toBe('')
  expect(new Character().name.middle).toBeNull()
  expect(new Character().name.last).toBeNull()
  expect(new Character().name.full).toBe('')
  expect(new Character().name.nicknames).toHaveLength(0)

  expect(new Character().pronouns.subject).toBe('he')
  expect(new Character().pronouns.object).toBe('him')
  expect(new Character().pronouns.possessive).toBe('his')
  expect(new Character().pronouns.possessivePronoun).toBe('his')
  expect(new Character().pronouns.noun).toBe('man')
  expect(new Character().pronouns.reflexive).toBe('himself')

  expect(new Character().sex.type).toBe('male')

  expect(new Character().skin.birthmarks).toBeNull()
  expect(new Character().skin.brands).toBeNull()
  expect(new Character().skin.color).toBe('')
  expect(new Character().skin.scars).toBeNull()
  expect(new Character().skin.tattoos).toBeNull()
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
  expect(new Character({ eyes: { colors: { left: 'blue', right: 'green' } } }).eyes.colors).toStrictEqual({ left: 'blue', right: 'green' })
})

// hair
test('character with given hair color', () => {
  expect(new Character({ hair: { arm: { color: 'brown', length: 'short', style: 'neat' }}}).hair.arm.color).toBe('brown')
})

test('character with given hair length', () => {
  expect(new Character({ hair: { arm: { color: 'brown', length: 'short', style: 'neat' }}}).hair.arm.length).toBe('short')
})

test('character with given hair style', () => {
  expect(new Character({ hair: { arm: { color: 'brown', length: 'short', style: 'neat' }}}).hair.arm.style).toBe('neat')
})

// name
test('character with given name', () => {
  expect(new Character({ name: {first: 'John', last: 'Smith'}}).name.first).toBe('John')
})

// sex
test('character with given sex', () => {
  expect(new Character({ sex: { type: 'male' }}).sex.type).toBe('male')
  expect(new Character({ sex: { type: 'male' }}).pronouns.subject).toBe('he')
  expect(new Character({ sex: { type: 'male' }}).pronouns.object).toBe('him')
  expect(new Character({ sex: { type: 'male' }}).pronouns.possessive).toBe('his')
  expect(new Character({ sex: { type: 'male' }}).pronouns.possessivePronoun).toBe('his')
  expect(new Character({ sex: { type: 'male' }}).pronouns.noun).toBe('man')
  expect(new Character({ sex: { type: 'male' }}).pronouns.reflexive).toBe('himself')
})

// skin
test('character with given skin color', () => {
  expect(new Character({ skin: { color: 'green' }}).skin.color).toBe('green')
})
