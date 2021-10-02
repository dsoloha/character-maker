import { Sexuality } from '../src/index'

test('default sexuality', () => {
  expect(new Sexuality('male').gender).toBe('male')
  expect(new Sexuality('male').attraction.male).toBe(0)
  expect(new Sexuality('male').attraction.female).toBe(0)
})
