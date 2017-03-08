module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  rules: {
    // NOTE: Plain old js rules ...
    'object-curly-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'only-multiline' ],
    'eqeqeq': 'error',
    'semi': 'error',
    'yoda': 'error',
    'block-scoped-var': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': [ 'error', { 'max': 1, maxEOF: 1 } ],
    'default-case': 'error',
    'dot-notation': 'error',
    'no-eq-null': 'error',
    'no-lone-blocks': 'error',
    'no-useless-concat': 'error',
    'no-multi-spaces': 'error',
    'no-lonely-if': 'error',
    'radix': [ 'error', 'as-needed' ],
    'wrap-iife': [ 'error', 'outside' ],
    'no-useless-concat': 'error',
    'keyword-spacing': 'error',
    'array-callback-return': 'error',
    'no-empty-function': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'always', { 'exceptions': [ '{}' ] } ],
    'no-warning-comments': 'error',
    'no-param-reassign': 'error',
    'no-else-return': 'error',
    'key-spacing': 'error',
    'lines-around-comment': 'error',
    'newline-after-var': 'error',
    'no-extra-parens': 'error',

    // NOTE: ES2015 specific rules
    'no-duplicate-imports': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
    'no-var': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': [ 'error', 'always' ],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'no-const-assign': 'error',
    'arrow-body-style': [ 'error', 'always' ],
    'prefer-rest-params': 'error',
  }
};
