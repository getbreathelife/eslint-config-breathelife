module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': 'off',
    'filenames/match-exported': 'error',
    'filenames/no-index': 'off',
  },
};
