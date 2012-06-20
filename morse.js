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
  if (!str) {
    return '';
  }

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

function decodeCharacterByMap (char) {
  for (var i in map) {
    if (map[i] == char) {
      return i;
    }
  }
  return ' ';
}

var util = require('util');

function decodeCharacterByDichotomy (char) {
  var sub = char.split('');
  return traverseNodeWithCharacters(tree, sub);

  function traverseNodeWithCharacters (node, chars) {
    var cur = chars.shift();
    if (!node[cur]) {
      if (!node.stop) {
        console.log(node);
      }
      return node.stop || '?';
    }
    return traverseNodeWithCharacters(node[cur], chars);
  }
}
