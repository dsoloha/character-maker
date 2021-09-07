import { Name } from '../src/index'

test('default first name', () => {
  expect(new Name().first).toBe('')
})
