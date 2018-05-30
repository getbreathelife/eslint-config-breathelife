module.exports = {
  extends: [
    'eslint-config-airbnb-base',

    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/filenames',
    './rules/imports',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    strict: 'error',
  },
};
