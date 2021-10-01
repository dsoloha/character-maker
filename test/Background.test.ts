import { Background } from '../src/index'

test('default birthplace', () => {
  expect(new Background().birthplace).toBe('')
})

test('given birthplace', () => {
  expect(new Background({ birthplace: 'London' }).birthplace).toBe('London')
})

test('default education', () => {
  expect(new Background().education).toBeNull()
})

test('given education', () => {
  expect(new Background({ education: { school: 'Oxford', length: 4 }}).education?.school).toBe('Oxford')
  expect(new Background({ education: { school: 'Oxford', length: 4 }}).education?.length).toBe(4)
})

test('given nationality', () => {
  expect(new Background({ nationality: 'English' }).nationality).toBe('English')
})

test('default occupation', () => {
  expect(new Background().occupation).toEqual({ type: '', income: 0, length: 0 })
})

test('given occupation', () => {
  expect(new Background({ occupation: { type: 'student', income: 0, length: 0} }).occupation.type).toBe('student')
  expect(new Background({ occupation: { type: 'student', income: 0, length: 0} }).occupation.income).toBe(0)
  expect(new Background({ occupation: { type: 'student', income: 0, length: 0} }).occupation.length).toBe(0)
})
