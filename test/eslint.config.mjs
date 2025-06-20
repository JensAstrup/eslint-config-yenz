import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jest from 'eslint-plugin-jest'
import perfectionist from 'eslint-plugin-perfectionist'
import yenz from 'eslint-plugin-yenz'
import yenzRules from '../index.mjs'

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
  {
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
    rules: yenzRules.rules
  },
  {
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
      '@typescript-eslint/no-unsafe-call': 'off'
    }
  }
]
