import { Shoulders } from '../src/index'

test('default shoulders', () => {
  expect(new Shoulders().width).toBe('')
})

test('given shoulder width', () => {
  expect(new Shoulders({ width: 'wide' }).width).toBe('wide')
})
