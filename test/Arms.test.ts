import { Arms } from '../src/index'

test('default hands', () => {
  expect(new Arms().left?.hand?.fingers).toBe(5)
  expect(new Arms().right?.hand?.fingers).toBe(5)
})

test('default arm size', () => {
  expect(new Arms().left.size).toBe('')
  expect(new Arms().right.size).toBe('')
})

test('given arm size', () => {
  expect(new Arms({ left: { size: 'large' }}).left.size).toBe('large')
  expect(new Arms({ right: { size: 'large' }}).right.size).toBe('large')
})
