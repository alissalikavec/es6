var assert = chai.assert;

describe('arrow: findOdds', function() {
  it('should return an array of odd numbers', function() {
    assert.deepEqual(arrow.findOdds([1, 2, 3, 4, 5]), [1, 3, 5]);
  });
});

describe('arrow: sum', function() {
  it('should add two numbers', function() {
    assert.equal(arrow.sum(3, 2), 5);
  });
});
