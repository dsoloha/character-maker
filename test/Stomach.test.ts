import { Stomach } from '../src/index'

test('default stomach', () => {
  expect(new Stomach().shape).toBe('')
})

test('given stomach shape', () => {
  expect(new Stomach({ shape: 'flat' }).shape).toBe('flat')
})
