module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    arrowFunctions: true,
  },
};
