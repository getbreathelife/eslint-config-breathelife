module.exports = {
  rules: {
    // Prettier is handling that for us
    'function-paren-newline': 'off',
    // FIXME: Removed after airbnb-config-base release
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        FunctionDeclaration: { parameters: 1 },
        FunctionExpression: { parameters: 1 },
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: { var: 2, let: 2, const: 3 },
      },
    ],
    'max-len': ['error', 120],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
  },
};
