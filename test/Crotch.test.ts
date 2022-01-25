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
  expect(new Crotch({ ovaries: { menopause: true } }).ovaries).toEqual({
    menopause: true,
  })
})

test('given penis', () => {
  expect(new Crotch({ penis: { size: 'large' } }).penis).toEqual({
    size: 'large',
  })
})

test('given testicles', () => {
  expect(
    new Crotch({ testicles: { size: 'large', vasectomy: true } }).testicles
  ).toEqual({ size: 'large', vasectomy: true })
})

test('given vagina', () => {
  expect(new Crotch({ vagina: { description: 'small' } }).vagina).toEqual({
    description: 'small',
  })
})
