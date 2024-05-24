const baseConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'perfectionist',
    'import',
    'no-loops',
    'yenz',
    'jest'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  rules: {
    'yenz/type-ordering': 'error',
    'dot-notation': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error', {'allow': ['error', 'warn']}],
    'no-loops/no-loops': 'error',
    'no-magic-numbers': ['error', {'ignoreArrayIndexes': true, 'ignore': [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}],
    'no-use-before-define': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-union-types': 'off',
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-object-types': 'off',
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': 'function', 'next': '*' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'function' },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/newline-after-import': ['error', { count: 2 }]
  },
  overrides: [
    {
      'files': ['test/**'],
      'plugins': ['jest'],
      'extends': ['plugin:jest/recommended', 'plugin:jest/style'],
      'rules': {
        'jest/prefer-called-with': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-spy-on': 'error'
      }
    }
  ]
}

module.exports = baseConfig
