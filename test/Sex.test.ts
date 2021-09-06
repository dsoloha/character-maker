import { Sex } from '../src/index'

test('default sex', () => {
  expect(new Sex().type).toBe('male')
})
