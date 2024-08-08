const baseConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:perfectionist/recommended-natural-legacy',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:@stylistic/recommended-extends'
  ],
  plugins: [
    '@typescript-eslint',
    '@stylistic',
    'perfectionist',
    'import',
    'yenz',
    'jest'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'yenz/type-ordering': 'error',
    'yenz/no-loops': 'error',
    'dot-notation': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-case-declarations': 'off',
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-magic-numbers': ['error', { ignoreArrayIndexes: true, ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }],
    'no-use-before-define': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-union-types': 'off',
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-object-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@stylistic/no-multiple-empty-lines': 'off',
    '@stylistic/comma-dangle': 'off',
    '@stylistic/indent': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/newline-after-import': ['error', { count: 2 }]
  },
  overrides: [
    {
      files: ['test/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/prefer-called-with': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-spy-on': 'error'
      }
    }
  ]
}

module.exports = baseConfig
