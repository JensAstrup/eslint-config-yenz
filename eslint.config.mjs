import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jest from 'eslint-plugin-jest'
import perfectionist from 'eslint-plugin-perfectionist'
import yenz from 'eslint-plugin-yenz'

const baseConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      project: './tsconfig.json'
    },
    globals: {
      console: 'readonly',
      process: 'readonly',
      Buffer: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      global: 'readonly',
      globalThis: 'readonly'
    }
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
    '@stylistic': stylistic,
    perfectionist,
    import: importPlugin,
    yenz
  },
  rules: {
    // ESLint recommended rules
    ...js.configs.recommended.rules,
    
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
      argsIgnorePattern: '^_+'
    }],
    '@typescript-eslint/prefer-find': 'warn',
    '@typescript-eslint/unbound-method': 'off',

    // Stylistic rules
    '@stylistic/comma-dangle': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/no-multiple-empty-lines': 'off',

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
      ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
}

const testConfig = {
  files: [
    'test/**/*.ts', 'test/**/*.tsx',
    'tests/**/*.ts', 'tests/**/*.tsx',
    'test-files/**/*.ts', 'test-files/**/*.tsx',
    '**/*.test.ts', '**/*.test.tsx',
    '**/*.spec.ts', '**/*.spec.tsx'
  ],
  plugins: {
    jest
  },
  languageOptions: {
    globals: {
      ...jest.environments.globals.globals
    }
  },
  rules: {
    ...jest.configs.recommended.rules,
    ...jest.configs.style.rules,
    'jest/prefer-called-with': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-spy-on': 'error',
    'no-magic-numbers': 'off',
    "@typescript-eslint/no-unsafe-call": 'off'
  }
}

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.min.js'
    ],
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  baseConfig,
  testConfig
]
