import { Arms } from '../src/index'

test('default hands', () => {
  expect(new Arms().left?.hand).toBeNull()
  expect(new Arms().right?.hand).toBeNull()
})

test('default arm size', () => {
  expect(new Arms().left.size).toBe('')
  expect(new Arms().right.size).toBe('')
})

test('default arms', () => {
  expect(new Arms().left).toEqual({ hand: null, size: ''})
  expect(new Arms().right).toEqual({ hand: null, size: ''})
})

test('given arm size', () => {
  expect(new Arms({ left: { size: 'large' }}).left.size).toBe('large')
  expect(new Arms({ right: { size: 'large' }}).right.size).toBe('large')
})
