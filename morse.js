module.exports = {
  encode: encode,
  decode: decode,
  map: map,
  tree: tree
};

var map = require('./map');
var tree = require('./tree');

function encode (obj) {
  return maybeRecurse(obj, encodeMorseString);

  function encodeMorseString (str) {
    var ret = str.split('');
    for (var j in ret) {
      ret[j] = map[ret[j].toUpperCase()] || '?';
    }
    return ret.join(' ');
  }
}

function decode (obj, dichotomic) {
  return maybeRecurse(obj, decodeMorseString);

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

function maybeRecurse (obj, func) {
  if (!obj.pop) {
    return func(obj);
  }

  var clone = [];
  var i = 0;
  for (; i < obj.length; i++) {
    clone[i] = func(obj[i]);
  }
  return clone;
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
