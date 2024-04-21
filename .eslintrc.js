module.exports = {
  env: {
    es2022: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'perfectionist',
    'import'
  ],
  rules: {
    'dot-notation': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error', {'allow': ['error', 'warn']}],
    'no-magic-numbers': 'error',
    'no-use-before-define': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-union-types': 'off',
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-objects': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['builtin'],
        "newlines-between": 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/newline-after-import': ['error', { count: 2 }]
  }
};
