import { Build } from '../src/index'

test('default build', () => {
  expect(new Build().height).toBe(0)
  expect(new Build().muscles).toBe('')
  expect(new Build().type).toBe('')
  expect(new Build().weight).toBe(0)
})

test('given height', () => {
  expect(new Build({ height: 180 }).height).toBe(180)
})

test('given muscles', () => {
  expect(new Build({ muscles: 'jacked' }).muscles).toBe('jacked')
})

test('given type', () => {
  expect(new Build({ type: 'lean' }).type).toBe('lean')
})

test('given weight', () => {
  expect(new Build({ weight: 100 }).weight).toBe(100)
})
