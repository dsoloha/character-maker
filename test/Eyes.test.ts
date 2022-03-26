import { Eyes } from '../src/index'

test('default eyes', () => {
  expect(new Eyes().astigmatism).toBe(false)
  expect(new Eyes().colors).toStrictEqual({ left: '', right: '' })
  expect(new Eyes().farsighted).toBe(false)
  expect(new Eyes().nearsighted).toBe(false)
})

test('given astigmatism', () => {
  expect(new Eyes({ astigmatism: true }).astigmatism).toBe(true)
})

test('given eye colors', () => {
  expect(
    new Eyes({ colors: { left: 'blue', right: 'green' } }).colors
  ).toStrictEqual({ left: 'blue', right: 'green' })
})

test('given farsightedness', () => {
  expect(new Eyes({ farsighted: true }).farsighted).toBe(true)
})

test('given nearsightedness', () => {
  expect(new Eyes({ nearsighted: true }).nearsighted).toBe(true)
})
