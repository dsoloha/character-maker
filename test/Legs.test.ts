import { Legs } from '../src/index'

test('default feet', () => {
  expect(new Legs().left?.foot?.toes).toBe(5)
  expect(new Legs().right?.foot?.toes).toBe(5)
})

test('default leg size', () => {
  expect(new Legs().left.size).toBe('')
  expect(new Legs().right.size).toBe('')
})

test('given leg size', () => {
  expect(new Legs({ left: { size: 'large' }}).left.size).toBe('large')
  expect(new Legs({ right: { size: 'large' }}).right.size).toBe('large')
})
