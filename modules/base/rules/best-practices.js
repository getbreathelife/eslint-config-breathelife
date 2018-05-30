module.exports = {
  rules: {
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',

    // We prefer to be able to use function, classes and variables before they were defined
    'no-use-before-define': 'off',
  },
};
