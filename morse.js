module.exports = {
  encode: encodeString,
  decode: decodeString,
  map: map,
  tree: tree
};

var map = require('./map');
var tree = require('./tree');

function encodeString (str) {
  var ret = str.split('');
  for (var i in ret) {
    ret[i] = map[ret[i].toUpperCase()] || '?';
  }
  return ret.join(' ');
}

function decodeString (str, dichotomic) {
  if (str === undefined) {
    return '';
  }

  var ret = str.split(' ');
  for (var i in ret) {
    if (typeof dichotomic === undefined || dichotomic !== true) {
      ret[i] = decodeCharacterByMap(ret[i]);
    } else {
      ret[i] = decodeCharacterByDichotomy(ret[i]);
    }
  }
  return ret.join('');
}

function decodeCharacterByMap (char) {
  for (var i in map) {
    if (map[i] == char) {
      return i;
    }
  }
  return ' ';
}

function decodeCharacterByDichotomy (char) {
  var sub = char.split('');
  var cur;
  var hold;
  while (cur = sub.pop()) {
    sub = sub[cur];
  }
  return sub.stop;
}
