import { Eyes } from '../src/index';

test('default eyes', () => {
  expect(new Eyes().color).toBe('')
});

test('given eye color', () => {
  expect(new Eyes({ color: 'red' }).color).toBe('red')
});
