import { Sexuality } from '../src/index'

test('default sexuality', () => {
  expect(new Sexuality('male').gender).toBe('male')
  expect(new Sexuality('male').attraction.male).toBe(0)
  expect(new Sexuality('male').attraction.female).toBe(0)
})

test('given gender', () => {
  expect(new Sexuality('male', { gender: 'female' }).gender).toBe('female')
})

test('given attraction', () => {
  expect(
    new Sexuality('male', { attraction: { male: 0, female: 100 } }).attraction
  ).toEqual({ male: 0, female: 100 })
  expect(
    new Sexuality('male', { attraction: { male: 100, female: 0 } }).attraction
  ).toEqual({ male: 100, female: 0 })
})
