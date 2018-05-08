let max_length = 3;
const CB = new CircularBuffer(max_length);


QUnit.test('Testing CircularBuffer', function (assert) {
  assert.equal(max_length, CB.max_length, 'max_length is set correctly');
  const first = {1: 1};
  const second = {2: 2};
  const third = {3: 3};
  const fourth = {4: 4};

  CB.append(first);
  CB.append(second);
  CB.append(third);
  assert.equal(CB.buffer.length, 3, 'append should have added three members to the buffer');
  assert.equal(CB.getCurr(), first, 'tests that getCurr() returns the correct buffer item');
  assert.equal(CB.getNext(), second, 'tests that getNext() returns the correct buffer item');
  assert.equal(CB.getPrev(), first, 'tests that getPrev() returns the correct buffer item');

  CB.append(fourth);
  assert.equal(CB.buffer[0], fourth, 'Once the buffer limit is exceeded then it should return to the beginning')  

});