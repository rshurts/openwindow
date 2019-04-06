module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'global-require': 'off',
    'react/prop-types': 'off', // TODO Fix and remove line to default to error.
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': [
      'error',
      { classes: true, functions: false, variables: true },
    ],
    'sort-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
