import { Hair } from '../src/index'

const defaultHair = {
  color: '',
  length: '',
  style: '',
}

test('default hair', () => {
  expect(new Hair().arm).toEqual(defaultHair)
  expect(new Hair().chest).toEqual(defaultHair)
  expect(new Hair().face).toEqual(defaultHair)
  expect(new Hair().head).toEqual(defaultHair)
  expect(new Hair().leg).toEqual(defaultHair)
  expect(new Hair().pubic).toEqual(defaultHair)
  expect(new Hair().underarms).toEqual(defaultHair)
})

test('default hair color', () => {
  expect(new Hair().arm.color).toBe('')
  expect(new Hair().chest.color).toBe('')
  expect(new Hair().face.color).toBe('')
  expect(new Hair().head.color).toBe('')
  expect(new Hair().leg.color).toBe('')
  expect(new Hair().pubic.color).toBe('')
  expect(new Hair().underarms.color).toBe('')
})

test('default hair length', () => {
  expect(new Hair().arm.length).toBe('')
  expect(new Hair().chest.length).toBe('')
  expect(new Hair().face.length).toBe('')
  expect(new Hair().head.length).toBe('')
  expect(new Hair().leg.length).toBe('')
  expect(new Hair().pubic.length).toBe('')
  expect(new Hair().underarms.length).toBe('')
})

test('default hair style', () => {
  expect(new Hair().arm.style).toBe('')
  expect(new Hair().chest.style).toBe('')
  expect(new Hair().face.style).toBe('')
  expect(new Hair().head.style).toBe('')
  expect(new Hair().leg.style).toBe('')
  expect(new Hair().pubic.style).toBe('')
  expect(new Hair().underarms.style).toBe('')
})

test('given hair color', () => {
  expect(
    new Hair({ arm: { color: 'red', length: 'short', style: 'straight' } }).arm
      .color
  ).toBe('red')
  expect(
    new Hair({ chest: { color: 'red', length: 'short', style: 'straight' } })
      .chest.color
  ).toBe('red')
  expect(
    new Hair({ face: { color: 'red', length: 'short', style: 'straight' } })
      .face.color
  ).toBe('red')
  expect(
    new Hair({ head: { color: 'red', length: 'short', style: 'straight' } })
      .head.color
  ).toBe('red')
  expect(
    new Hair({ leg: { color: 'red', length: 'short', style: 'straight' } }).leg
      .color
  ).toBe('red')
  expect(
    new Hair({ pubic: { color: 'red', length: 'short', style: 'straight' } })
      .pubic.color
  ).toBe('red')
  expect(
    new Hair({
      underarms: { color: 'red', length: 'short', style: 'straight' },
    }).underarms.color
  ).toBe('red')
})

test('given hair length', () => {
  expect(
    new Hair({ arm: { color: 'red', length: 'short', style: 'straight' } }).arm
      .length
  ).toBe('short')
  expect(
    new Hair({ chest: { color: 'red', length: 'short', style: 'straight' } })
      .chest.length
  ).toBe('short')
  expect(
    new Hair({ face: { color: 'red', length: 'short', style: 'straight' } })
      .face.length
  ).toBe('short')
  expect(
    new Hair({ head: { color: 'red', length: 'short', style: 'straight' } })
      .head.length
  ).toBe('short')
  expect(
    new Hair({ leg: { color: 'red', length: 'short', style: 'straight' } }).leg
      .length
  ).toBe('short')
  expect(
    new Hair({ pubic: { color: 'red', length: 'short', style: 'straight' } })
      .pubic.length
  ).toBe('short')
  expect(
    new Hair({
      underarms: { color: 'red', length: 'short', style: 'straight' },
    }).underarms.length
  ).toBe('short')
})

test('given hair style', () => {
  expect(
    new Hair({ arm: { color: 'red', length: 'short', style: 'straight' } }).arm
      .style
  ).toBe('straight')
  expect(
    new Hair({ chest: { color: 'red', length: 'short', style: 'straight' } })
      .chest.style
  ).toBe('straight')
  expect(
    new Hair({ face: { color: 'red', length: 'short', style: 'straight' } })
      .face.style
  ).toBe('straight')
  expect(
    new Hair({ head: { color: 'red', length: 'short', style: 'straight' } })
      .head.style
  ).toBe('straight')
  expect(
    new Hair({ leg: { color: 'red', length: 'short', style: 'straight' } }).leg
      .style
  ).toBe('straight')
  expect(
    new Hair({ pubic: { color: 'red', length: 'short', style: 'straight' } })
      .pubic.style
  ).toBe('straight')
  expect(
    new Hair({
      underarms: { color: 'red', length: 'short', style: 'straight' },
    }).underarms.style
  ).toBe('straight')
})
