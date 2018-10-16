module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-breathelife-base',

    './rules/env',
  ].map(require.resolve),
};
