const calclualtor = require('./calculator');


// to do tests you need two things:
// a test runner => the library that runs the test 
// assertion library => library that handles the test cases (handles the details)
// Jest is both test runner AND an assertion library 
// .test.js, .spec.js or making a _test_ directory are the ways Jest knows what files to run.

xit('runs the test', () => {
  // assertions
  expect(1 * 4).toBe(4);
});

// describe sets up a test suite, a collection of related tests:
describe('the calclualtor', () => {
  // you can even nest them
  describe('the add method', () => {
    it('should add two numbers', () => {
      const { add } = calclualtor;
      expect(add(2, 2)).toBe(4);
      expect(add(2, 1)).toBe(3);
      expect(add(-2, 4)).toBe(2)
    })
  })
})
