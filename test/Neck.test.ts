import { Neck } from '../src/index'

test('default neck', () => {
  expect(new Neck().larynx).toBe(true)
})

test('given neck', () => {
  expect(new Neck({ larynx: false }).larynx).toBe(false)
})
