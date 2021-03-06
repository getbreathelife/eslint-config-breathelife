module.exports = {
  settings: {
    'import/parser': 'babel-eslint',
  },

  rules: {
    // FIXME: Removed after airbnb-config-base release
    'import/exports-last': 'off',
    'import/named': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-named-as-default': 'error',
    'import/prefer-default-export': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],

    // Disabled due to https://github.com/tleunen/eslint-import-resolver-babel-module/issues/46
    'import/no-extraneous-dependencies': 'off',

    // disable this for now until we eject the configuration off react-scripts
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
