import { Mouth } from '../src/index'

test('default mouth', () => {
  expect(new Mouth().teeth).toEqual({ count: 32, description: '' })
})

test('given teeth', () => {
  expect(new Mouth({ teeth: { count: 30, description: 'white' } }).teeth.count).toBe(30)
  expect(new Mouth({ teeth: { count: 30, description: 'white' } }).teeth.description).toBe('white')
})

test('given tongue', () => {
  expect(new Mouth({ tongue: false }).tongue).toBe(false)
})
