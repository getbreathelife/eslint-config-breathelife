module.exports = {
  rules: {
    // disallow identifier that are too short
    'id-length': [
      'error',
      {
        exceptions: [
          '_',
          '@',
          '$',
          '#',
          'i',
          'j',
          'k',
          'x',
          'y',
          'z',
          'id',
          'R',
        ],
      },
    ],
  },
};
