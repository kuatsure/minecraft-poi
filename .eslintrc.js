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
    'object-curly-spacing': [ 2, 'always' ],
    'comma-dangle': [ 2, 'only-multiline' ],
    'eqeqeq': 2,
    'semi': 2,
    'yoda': 2,
    'block-scoped-var': 2,
    'no-trailing-spaces': 2,
    'no-multiple-empty-lines': [ 2, { 'max': 1, maxEOF: 1 } ],
    'default-case': 2,
    'dot-notation': 2,
    'no-eq-null': 2,
    'no-lone-blocks': 2,
    'no-useless-concat': 2,
    'no-multi-spaces': 2,
    'no-lonely-if': 2,
    'radix': [ 2, 'as-needed' ],
    'wrap-iife': [ 2, 'outside' ],
    'no-useless-concat': 2,
    'keyword-spacing': 2,
    'array-callback-return': 2,
    'no-empty-function': 2,
    'space-before-function-paren': [ 2, 'never' ],
    'space-in-parens': [ 2, 'always', { 'exceptions': [ '{}' ] } ],
    'no-warning-comments': 2,
    'no-param-reassign': 2,
    'no-else-return': 2,
    'key-spacing': 2,
    'lines-around-comment': 2,
    'newline-after-var': 2,
    'no-extra-parens': 2,

    // NOTE: ES2015 specific rules
    'no-duplicate-imports': 2,
    'arrow-spacing': 2,
    'arrow-parens': [ 2, 'as-needed' ],
    'no-var': 2,
    'prefer-template': 2,
    'template-curly-spacing': [ 2, 'always' ],
    'object-shorthand': 2,
    'prefer-const': 2,
    'no-const-assign': 2,
    'arrow-body-style': [ 2, 'always' ],
    'prefer-rest-params': 2,
  }
};
