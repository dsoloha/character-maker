import { Background } from '../src/index'

test('default birthplace', () => {
  expect(new Background().birthplace).toBe('')
})

test('random birthplace', () => {
  expect(new Background().generate().birthplace).toBeDefined()
  expect(new Background().generate().birthplace?.city).toBeDefined()
  expect(new Background().generate().birthplace?.country).toBeDefined()
})

test('given birthplace', () => {
  expect(new Background({ birthplace: { city: 'Kyiv' } }).birthplace.city).toBe(
    'Kyiv'
  )
  expect(
    new Background({ birthplace: { city: 'Kyiv', country: 'Ukraine' } })
      .birthplace.city
  ).toBe('Kyiv')
})

test('default education', () => {
  expect(new Background().education).toBeNull()
})

test('given education', () => {
  expect(
    new Background({ education: { school: 'high scool', length: 24 } })
      .education?.school
  ).toBe('high scool')
  expect(
    new Background({ education: { school: 'high school', length: 24 } })
      .education?.length
  ).toBe(24)
  expect(new Background().generate().education?.grade).toBeGreaterThanOrEqual(0)
  expect(new Background().generate().education?.grade).toBeLessThanOrEqual(100)
})

test('given nationality', () => {
  expect(new Background({ nationality: 'English' }).nationality).toBe('English')
})

test('default occupation', () => {
  expect(new Background().occupation).toEqual({
    type: '',
    income: 0,
    length: 0,
  })
  expect(new Background().occupation.type).toBe('')
  expect(new Background().occupation.income).toBe(0)
  expect(new Background().occupation.length).toBe(0)
})

test('given occupation', () => {
  expect(
    new Background({ occupation: { type: 'student', income: 100, length: 4 } })
      .occupation.type
  ).toBe('student')
  expect(
    new Background({ occupation: { type: 'student', income: 100, length: 4 } })
      .occupation.income
  ).toBe(100)
  expect(
    new Background({ occupation: { type: 'student', income: 100, length: 4 } })
      .occupation.length
  ).toBe(4)
})
