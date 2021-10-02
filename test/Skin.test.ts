import { Skin } from '../src/index'

test('default skin', () => {
  expect(new Skin().birthmarks).toBeNull()
  expect(new Skin().brands).toBeNull()
  expect(new Skin().color).toBe('')
  expect(new Skin().markings).toBeNull()
  expect(new Skin().scars).toBeNull()
  expect(new Skin().tattoos).toBeNull()
})

test('given skin color', () => {
  expect(new Skin({ color: 'green' }).color).toBe('green')
})

test('given birthmarks', () => {
  expect(new Skin({ birthmarks: [{
    location: 'arm',
    description: 'A birthmark',
  }] }).birthmarks).toContainEqual({ location: 'arm', description: 'A birthmark' })
})

test('given brands', () => {
  expect(new Skin({ brands: [{
    location: 'arm',
    description: 'A brand',
  }] }).brands).toContainEqual({ location: 'arm', description: 'A brand' })
})

test('given markings', () => {
  expect(new Skin({ markings: [{
    location: 'face',
    description: 'Freckles',
  }] }).markings).toContainEqual({ location: 'face', description: 'Freckles' })
})

test('given scars', () => {
  expect(new Skin({ scars: [{
    location: 'arm',
    description: 'A scar',
  }] }).scars).toContainEqual({ location: 'arm', description: 'A scar' })
})

test('given tattoos', () => {
  expect(new Skin({ tattoos: [{
    location: 'arm',
    description: 'A tattoo',
  }] }).tattoos).toContainEqual({ location: 'arm', description: 'A tattoo' })
})
