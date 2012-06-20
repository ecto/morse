// might be the dumbest idea I've ever had
module.exports = {
  '.': {
    stop: 'E',
    '.': {
      stop: 'I',
      '.': {
        stop: 'S',
        '.': {
          stop: 'H',
          '.': {
            stop: '5'
          },
          '-': {
            stop: '4'
          }
        },
        '-': {
          stop: 'V',
          '.': {
            stop: 'Ś'
          },
          '-': {
            stop: '3'
          }
        }
      },
      '-': {
        stop: 'U',
        '.': {
          stop: 'F',
          // note lack of -
          '.': {
            stop: 'É'
          }
        },
        '_': {
          stop: 'Ü',
          '.': {
            stop: 'Ð',
            '.': {
              stop: '?'
            },
            '-': {
              stop: '_'
            }
          },
          '-': {
            stop: '2'
          }
        }
      }
    },
    '-': {
      stop: 'A',
      '.': {
        stop: 'R',
        '.': {
          stop: 'L',
          // note lack of .
          '-': {
            stop: 'È',
            '.': {
              stop: '"'
            }
          }
        },
        '-': {
          stop: 'Ä',
          // note lack of -
          '.': {
            stop: '+',
            // note lack of .
            '-': {
              stop: '.'
            }
          }
        }
      },
      '-': {
        stop: 'W',
        '.': {
          stop: 'P',
          // '.': {},
          // TODO can't replicate character -_-
          '-': {
            stop: 'À',
            // note lack of -
            '.': {
              stop: '@'
            }
          }
        },
        '-': {
          stop: 'J',
          '.': {
            stop: 'Ĵ'
          },
          '-': {
            stop: '1',
            // note lack of -
            '.': {
              stop: "'"
            }
          }
        }
      }
    }
  },
  '-': {

  }
};

function encodeString (str) {
  var ret = str.split('');
  for (var i in ret) {
    ret[i] = map[ret[i].toUpperCase()] || '?';
  }
  return ret.join(' ');
}
