module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-breathelife-base',

    './rules/env',
    './rules/react',
  ].map(require.resolve),
};
