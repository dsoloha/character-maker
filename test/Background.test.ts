import { Background } from '../src/index'

test('default background', () => {
  expect(new Background().birthplace).toBe('')
})
