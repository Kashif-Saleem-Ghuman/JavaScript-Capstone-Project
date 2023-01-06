/**
 * @jest-environment jsdom
 */
import displayComments from './displayComments.js';

document.body.innerHTML = '<div class="c4c"></div>';

test('4', () => {
  expect(displayComments([{}, {}, {}, {},])).toBe(4);
});

test('0', () => {
  expect(displayComments([])).toBe(0);
});

test('3', () => {
  expect(displayComments(['1', '2','3'])).toBe(3);
});