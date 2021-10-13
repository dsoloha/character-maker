import { Waist } from '../src/index'

test('default waist', () => {
  expect(new Waist().size).toBe('')
})

test('given waist size', () => {
  expect(new Waist({ size: 'narrow' }).size).toBe('narrow')
})
