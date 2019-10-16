module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'global-require': 'off',
    'react/prop-types': 'off', // TODO Fix and remove line to default to error.
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-props-no-spreading': 'off', // TODO Fix and remove line to default to error.
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'warn',
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
