var morse = require('../');

var arr = [
  'hello',
  'world'
];
console.log(arr);

var encoded = morse.encode(arr);
console.log(encoded);

var decoded = morse.decode(encoded);
console.log(decoded);

var expected = [
  'HELLO',
  'WORLD'
];

console.log(expected[1] == decoded[1] ? 'pass' : 'fail');
