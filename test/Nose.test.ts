import { Nose } from '../src/index'

test('default nose', () => {
  expect(new Nose().anosmia).toBe(false)
})

test('given nose', () => {
  expect(new Nose({ anosmia: true }).anosmia).toBe(true)
})
