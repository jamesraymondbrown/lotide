const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [4, 6, 9] for [2, 4, 6, 9]", () => {
    assert.deepEqual(tail([2, 4, 6, 9]), [4, 6, 9]);
  });

  it("returns ['snow'] for ['rain', 'snow']", () => {
    assert.deepEqual(tail(['rain', 'snow']), ['snow']); 
  });
});