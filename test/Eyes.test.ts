import { Eyes } from '../src/index';

test('default eyes', () => {
  expect(new Eyes().color).toBe('')
});

test('given astigmatism', () => {
  expect(new Eyes({ astigmatism: true }).astigmatism).toBe(true)
})

test('given eye color', () => {
  expect(new Eyes({ color: 'red' }).color).toBe('red')
});

test('given farsightedness', () => {
  expect(new Eyes({ farsighted: true }).farsighted).toBe(true)
})

test('given nearsightedness', () => {
  expect(new Eyes({ nearsighted: true}).nearsighted).toBe(true)
})
