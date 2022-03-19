import { Character } from '../src/index'

// default
test('default character age', () => {
  expect(new Character().age.birth.day).toBe(1)
  expect(new Character().age.birth.month).toBe(1)
  expect(new Character().age.birth.year).toBe(1)
})

test('default character background', () => {
  expect(new Character().background.birthplace).toBe('')
  expect(new Character().background.education).toBeNull()
  expect(new Character().background.nationality).toBe('')
  expect(new Character().background.occupation).toEqual({
    type: '',
    income: 0,
    length: 0,
  })
})

test('default character eyes', () => {
  expect(new Character().eyes.astigmatism).toBe(false)
  expect(new Character().eyes.colors).toStrictEqual({ left: '', right: '' })
  expect(new Character().eyes.colors).toEqual({ right: '', left: '' })
  expect(new Character().eyes.farsighted).toBe(false)
  expect(new Character().eyes.nearsighted).toBe(false)
})

test('default character hair', () => {
  expect(new Character().hair.arm.color).toBe('')
  expect(new Character().hair.arm.length).toBe('')
  expect(new Character().hair.arm.style).toBe('')
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
  expect(new Character().pronouns.subject).toBe('he')
  expect(new Character().pronouns.object).toBe('him')
  expect(new Character().pronouns.possessive).toBe('his')
  expect(new Character().pronouns.possessivePronoun).toBe('his')
  expect(new Character().pronouns.noun).toBe('man')
  expect(new Character().pronouns.reflexive).toBe('himself')
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

// age
test('character with given age', () => {
  expect(new Character({ age: { birth: { day: 29 } } }).age.birth.day).toBe(29)
})

// background
test('character with given background', () => {
  expect(
    new Character({ background: { birthplace: 'London' } }).background
      .birthplace
  ).toBe('London')
})

// eyes
test('character with given eye colors', () => {
  expect(new Character({ eyes: { colors: { left: 'blue', right: 'green' }}}).eyes.colors).toStrictEqual({ left: 'blue', right: 'green' })
  expect(
    new Character({ eyes: { colors: { left: 'blue', right: 'green' } } }).eyes
      .colors
  ).toStrictEqual({ left: 'blue', right: 'green' })
})

// hair
test('character with given hair color', () => {
  expect(
    new Character({
      hair: { arm: { color: 'brown', length: 'short', style: 'neat' } },
    }).hair.arm.color
  ).toBe('brown')
})

test('character with given hair length', () => {
  expect(
    new Character({
      hair: { arm: { color: 'brown', length: 'short', style: 'neat' } },
    }).hair.arm.length
  ).toBe('short')
})

test('character with given hair style', () => {
  expect(
    new Character({
      hair: { arm: { color: 'brown', length: 'short', style: 'neat' } },
    }).hair.arm.style
  ).toBe('neat')
})

// mouth
test('character with given mouth', () => {
  expect(
    new Character({ mouth: { teeth: { count: 30, description: 'white' } } })
      .mouth.teeth
  ).toEqual({ count: 30, description: 'white' })
  expect(new Character({ mouth: { tongue: false } }).mouth.tongue).toBe(false)
})

// name
test('character with given name', () => {
  expect(
    new Character({ name: { first: 'John', last: 'Smith' } }).name.first
  ).toBe('John')
})

// nose
test('character with given nose', () => {
  expect(new Character({ nose: { anosmia: true } }).nose.anosmia).toBe(true)
})

// sex
test('character with given sex', () => {
  expect(new Character({ sex: { type: 'male' } }).sex.type).toBe('male')
  expect(new Character({ sex: { type: 'male' } }).pronouns.subject).toBe('he')
  expect(new Character({ sex: { type: 'male' } }).pronouns.object).toBe('him')
  expect(new Character({ sex: { type: 'male' } }).pronouns.possessive).toBe(
    'his'
  )
  expect(
    new Character({ sex: { type: 'male' } }).pronouns.possessivePronoun
  ).toBe('his')
  expect(new Character({ sex: { type: 'male' } }).pronouns.noun).toBe('man')
  expect(new Character({ sex: { type: 'male' } }).pronouns.reflexive).toBe(
    'himself'
  )
})

// skin
test('character with given skin color', () => {
  expect(new Character({ skin: { color: 'green' } }).skin.color).toBe('green')
})
