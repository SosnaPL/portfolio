module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    React: true,
    JSX: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-no-literals': 2,
    'react/react-in-jsx-scope': 0,
    'space-before-function-paren': 0,
    'react/no-unknown-property': 0,
    'no-unused-vars': 1,
    eqeqeq: 0
  }
}
