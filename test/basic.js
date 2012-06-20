var morse = require('../');

var str = 'Hello, world.';
console.log(str);

var encoded = morse.encode(str);
console.log(encoded);

var decoded = morse.decode(encoded);
console.log(decoded);

console.log(str.toUpperCase() == decoded ? 'pass' : 'fail');
