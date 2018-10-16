module.exports = {
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],

    // FIXME: Discuss final status on those rules (currently disabled)
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    // End

    'react/default-props-match-prop-types': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/sort-comp': 'off',
  },
};
