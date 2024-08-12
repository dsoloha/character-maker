import { Crotch } from '../src/index'

test('default anus', () => {
  expect(new Crotch().anus).toEqual({ description: '' })
})

test('default ovaries', () => {
  expect(new Crotch().ovaries).toBeNull()
})

test('default penis', () => {
  expect(new Crotch().penis).toBeNull()
})

test('default testicles', () => {
  expect(new Crotch().testicles).toBeNull()
})

test('default vagina', () => {
  expect(new Crotch().vagina).toBeNull()
})

test('given anus', () => {
  expect(new Crotch({ anus: { description: 'small' } }).anus).toEqual({
    description: 'small',
  })
})

test('given ovaries', () => {
  expect(new Crotch({ ovaries: { fertile: true } }).ovaries).toEqual({
    fertile: true,
  })
})

test('given penis', () => {
  expect(new Crotch({ penis: { size: 'large' } }).penis).toEqual({
    size: 'large',
  })
})

test('given testicles', () => {
  expect(
    new Crotch({ testicles: { size: 'large', potent: true } }).testicles
  ).toEqual({ size: 'large', potent: true })
})

test('given testicle size', () => {
  expect(new Crotch({ testicles: { size: 'large' } }).testicles?.size).toBe(
    'large'
  )
  expect(
    new Crotch({ testicles: { size: 'small' } }).generate().testicles?.potent
  ).toBeDefined()
})

test('given testicle potency', () => {
  expect(
    new Crotch({ testicles: { size: 'small', potent: false } }).testicles
  ).toEqual({
    size: 'small',
    potent: false,
  })
})

test('given vagina', () => {
  expect(new Crotch({ vagina: { description: 'small' } }).vagina).toEqual({
    description: 'small',
  })
})
