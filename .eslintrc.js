module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'no-shadow': 0,
    'no-console': 0,
    'func-names': 0,
    'prefer-promise-reject-errors': 0,
    'import/prefer-default-export': 0,
  },
};
