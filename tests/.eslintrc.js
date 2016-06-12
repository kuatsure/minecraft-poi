module.exports = {
  env: {
    'embertest': true
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
    'radix': [ 'error', 'as-needed' ],
    'wrap-iife': [ 'error', 'outside' ],
    'no-useless-concat': 'error',
    'keyword-spacing': 'error',
    'array-callback-return': 'error',
    'no-empty-function': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': 'off',
    'no-warning-comments': 'warn',
    'no-param-reassign': 'warn',
    'no-else-return': 'error',
    'key-spacing': 'error',
    'lines-around-comment': 'error',
    'newline-after-var': 'off',

    // NOTE: ES2015 specific rules
    'no-duplicate-imports': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
    'no-var': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': [ 'error', 'always' ],
    'object-shorthand': 'error',
    'prefer-const': 'off',
    'arrow-body-style': [ 'error', 'always' ],
    'prefer-rest-params': 'off',
  }
};
