import { Health } from '../src/index'

test('default health', () => {
  expect(new Health().illnesses).toHaveLength(0)
  expect(new Health().injuries).toHaveLength(0)
})

test('given illnesses', () => {
  expect(new Health({ illnesses: ['cold'] }).illnesses).toContain('cold')
})

test('given injuries', () => {
  expect(new Health({ injuries: ['scratch'] }).injuries).toContain('scratch')
})
