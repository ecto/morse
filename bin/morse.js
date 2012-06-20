#!/usr/bin/env node
var morse = require('../');
var optimist = require('optimist');
var argv = optimist
  .usage('Usage: $0 [options] string')
  .boolean('d')
  .alias('d', 'decode')
  .describe('d', 'Decode a string of Morse code')
  .alias('h', 'help')
  .describe('h', 'Show this text')
  .argv;

if (argv.h || !argv._.length) {
  optimist.showHelp();
  process.exit();
}

var str = argv._.join(' ');
if (argv.d) {
  console.log(morse.decode(str));
} else {
  console.log(morse.encode(str));
}
