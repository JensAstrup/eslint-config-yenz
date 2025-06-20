export default {
  rules: {
    // ESLint recommended rules
    ...js.configs.recommended.rules,

    'react/no-unescaped-entities': 'off',
    
    // TypeScript ESLint rules
    ...typescriptEslint.configs.recommended.rules,
    ...typescriptEslint.configs['recommended-type-checked'].rules,
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^_+',
      argsIgnorePattern: '^_+',
      caughtErrorsIgnorePattern: '^_+',
    destructuredArrayIgnorePattern: '^_+'
    }],
    '@typescript-eslint/prefer-find': 'warn',
    '@typescript-eslint/unbound-method': 'off',

    // Stylistic rules
    '@stylistic/comma-dangle': 'off',
    '@stylistic/indent': 'off',

    // Import rules
    'import/newline-after-import': ['error', { count: 2 }],
    'import/no-named-as-default': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroupsExcludedImportTypes: ['builtin'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }],

    // Perfectionist rules (selective)
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-named-exports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-object-types': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-union-types': 'off',

    // Core ESLint rules
    'brace-style': ['error', 'stroustrup'],
    'dot-notation': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-case-declarations': 'off',
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-magic-numbers': ['error', {
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 60]  // 60 is often used for seconds
    }],
    'no-use-before-define': 'off',
    'padding-line-between-statements': ['error', 
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' }
    ],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],

    // Custom plugin rules
    'yenz/no-loops': 'error',
    'yenz/type-ordering': 'error'
  }
