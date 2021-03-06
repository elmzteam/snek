module.exports = {
  extends: [
    '@scottnonnenberg/thehelp/core',
    '@scottnonnenberg/thehelp/es2015',
  ],
  rules: {
    'import/no-commonjs': 'off',
    'arrow-parens': ['error', 'always'],
    'func-names': 'off',
    'brace-style': ['error', '1tbs'],
  },
};
