// mock the movies array
const movies = [
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
];

const movies2 = [
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the dome' },
  { name: 'under the hood' },
];

// function to be tested
const displayCounter = (card) => card.length;

// test
describe('movies length check', () => {
  test('counts the number of objects in the movies array', () => {
    expect(displayCounter(movies)).toBe(15);
  });
  test('counts the number of objects in the movies array', () => {
    expect(displayCounter(movies2)).toBe(16);
  });
});
