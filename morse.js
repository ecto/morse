module.exports = {
  encode: encode,
  decode: decode,
  map: map,
  tree: tree
};

var map = require('./map');
var tree = require('./tree');

function encode (obj) {
  if (!obj.pop) {
    return encodeMorseString(obj);
  }

  var clone = [];
  var i = 0;
  for (; i < obj.length; i++) {
    clone[i] = encodeMorseString(obj[i]);
  }
  return clone;

  function encodeMorseString (str) {
    var ret = str.split('');
    for (var j in ret) {
      ret[j] = map[ret[j].toUpperCase()] || '?';
    }
    return ret.join(' ');
  }
}

function decode (obj, dichotomic) {
  if (!obj.pop) {
    return decodeMorseString(obj);
  }

  var clone = [];
  var i = 0;
  for (; i < obj.length; i++) {
    clone[i] = decodeMorseString(obj[i]);
  }
  return clone;

  function decodeMorseString (str) {
    var ret = str.split(' ');
    for (var i in ret) {
      if (!dichotomic) {
        ret[i] = decodeCharacterByMap(ret[i]);
      } else {
        ret[i] = decodeCharacterByDichotomy(ret[i]);
      }
    }
    return ret.join('');
  }
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
  return traverseNodeWithCharacters(tree, sub);

  function traverseNodeWithCharacters (node, chars) {
    var cur = chars.shift();
    if (!node[cur]) {
      return node.stop || '?';
    }
    return traverseNodeWithCharacters(node[cur], chars);
  }
}
