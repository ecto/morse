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
    stop: 'T',
    '.': {
      stop: 'N',
      '.': {
        stop: 'D',
        '.': {
          stop: 'B',
          '.': {
            stop: '6',
            // notive lack of .
            '-': {
              stop: '-'
            }
          },
          '-': {
            stop: '='
          }
        },
        '-': {
          stop: 'X',
          // notice lack of -
          '.': {
            stop: '/'
          }
        }
      },
      '-': {
        stop: 'K',
        '.': {
          stop: 'C',
          '.': {
            stop: 'Ç'
          },
          '-': {
            // notice lack of stop
            '.': {
              stop: ';'
            },
            '-': {
              stop: '!'
            }
          }
        },
        '-': {
          stop: 'Y',
          // notice lack of -
          '.': {
            stop: 'Ĥ',
            // notice lack of .
            '-': {
              stop: '()'
            }
          }
        }
      }
    },
    '-': {
      stop: 'M',
      '.': {
        stop: 'G',
        '.': {
          stop: 'Z',
          '.': {
            stop: '7'
          },
          '-': {
            // note lack of stop
            // note lack of .
            '-': {
              stop: ','
            }
          }
        },
        '-': {
          stop: 'Q',
          '.': {
            stop: 'Ĝ'
          },
          '-': {
            stop: 'Ñ'
          }
        }
      },
      '-': {
        stop: 'O',
        '.': {
          stop: 'Ö',
          // note lack of -
          '.': {
            stop: '8',
            // note lack of -
            '.': {
              stop: ':'
            }
          }
        },
        '-': {
          stop: 'CH', // is there a digraph for this?
          '.': {
            stop: '9'
          },
          '-': {
            stop: '0'
          }
        }
      }
    }
  }
};
