import { Speech } from '../src/index'

test('default speech', () => {
  expect(new Speech().style).toBe('')
})

test('given speech style', () => {
  expect(new Speech({ style: 'posh' }).style).toBe('posh')
})
