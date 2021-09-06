import { Pronouns } from '../src/index'

test('default male pronouns', () => {
  expect(new Pronouns('male').He).toBe('He')
})
