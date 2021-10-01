import { Background } from '../src/index'

test('default birthplace', () => {
  expect(new Background().birthplace).toBe('')
})

test('given birthplace', () => {
  expect(new Background({ birthplace: 'London' }).birthplace).toBe('London')
})

test('default education', () => {
  expect(new Background().education).toEqual({ school: '', length: 1 })
  expect(new Background().education.school).toBe('')
  expect(new Background().education.length).toBe(1)
})

test('given education', () => {
  expect(new Background({ education: { school: 'Oxford', length: 4 }}).education.school).toBe('Oxford')
  expect(new Background({ education: { school: 'Oxford', length: 4 }}).education.length).toBe(4)
})

test('given nationality', () => {
  expect(new Background({ nationality: 'English' }).nationality).toBe('English')
})

test('given occupation', () => {
  expect(new Background({ occupation: 'student' }).occupation).toBe('student')
})
