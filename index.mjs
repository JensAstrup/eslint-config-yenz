import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jest from 'eslint-plugin-jest'
import perfectionist from 'eslint-plugin-perfectionist'
import yenz from 'eslint-plugin-yenz'

const plugins = {
  '@stylistic': stylistic,
  '@typescript-eslint': typescriptEslint,
  'import': importPlugin,
  'jest': jest,
  'perfectionist': perfectionist,
  ...yenz.configs.all.plugins
}

const languageOptions = {
  parser: typescriptParser,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true
  }
}

const rules = {
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
    destructuredArrayIgnorePattern: '^_+' // Fixed: added missing comma
  }],
  '@typescript-eslint/prefer-find': 'warn',
  '@typescript-eslint/unbound-method': 'off',

  // Stylistic rules
  '@stylistic/comma-dangle': 'off',
  '@stylistic/no-multiple-empty-lines': ['error', { max: 2 }],
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
  'eol-last': ['error', 'always'],
  'no-magic-numbers': ['error', {
    ignoreArrayIndexes: true,
    ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 60, 100]  // 60 is often used for seconds, 100 is often used for percentage
  }],
  'no-trailing-spaces': 'warn',
  'no-use-before-define': 'off',
  'padding-line-between-statements': ['error', 
    { blankLine: 'always', prev: 'function', next: '*' },
    { blankLine: 'always', prev: '*', next: 'function' }
  ],
  'quotes': ['error', 'single'],
  'semi': ['error', 'never'],

  // Custom plugin rules
  ...yenz.configs.all.rules
}

// Export full config
export default {
  languageOptions,
  plugins,
  rules
}

// Export individual parts for flexible usage
export { plugins, rules, languageOptions }
