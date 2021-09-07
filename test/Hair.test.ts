import { Hair } from '../src/index'

test('default hair color', () => {
  expect(new Hair().color).toBe('black')
})

test('default hair length', () => {
  expect(new Hair().length).toBe('short')
})

test('default hair style', () => {
  expect(new Hair().style).toBe('straight')
})

test('given hair color', () => {
  expect(new Hair({ color: 'red' }).color).toBe('red')
})

test('given hair length', () => {
  expect(new Hair({ length: 'long' }).length).toBe('long')
})

test('given hair style', () => {
  expect(new Hair({ style: 'curly'}).style).toBe('curly')
})
