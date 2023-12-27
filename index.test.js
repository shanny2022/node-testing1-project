// index.test.js
const Counter = require('./index');

test('Counter class is defined', () => {
  expect(typeof Counter).toEqual('function');
});

test('countDown method returns correct count', () => {
  const counter = new Counter(3);
  expect(counter.countDown()).toEqual(2);
  expect(counter.countDown()).toEqual(1);
});

test('countDown method does not go below zero', () => {
  const counter = new Counter(1);
  counter.countDown();
  expect(counter.countDown()).toEqual(0);
  expect(counter.countDown()).toEqual(0);
});
