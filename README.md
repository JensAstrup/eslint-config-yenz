# eslint-config-yenz

An opinionated ESLint configuration for TypeScript projects. Built for ESLint 9 with flat config support.

## What's Included

This config bundles and configures the following plugins:

- **[@eslint/js](https://www.npmjs.com/package/@eslint/js)** — ESLint recommended rules
- **[@typescript-eslint](https://typescript-eslint.io/)** — TypeScript-specific linting with type-checked rules
- **[@stylistic/eslint-plugin](https://eslint.style/)** — Code formatting rules
- **[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)** — Import organization and validation
- **[eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)** — Jest testing best practices
- **[eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)** — Code organization (selectively disabled)
- **[eslint-plugin-yenz](https://www.npmjs.com/package/eslint-plugin-yenz)** — Custom rules

## Installation

```bash
npm install eslint-config-yenz --save-dev
```

## Usage

Create an `eslint.config.mjs` in your project root:

```js
import yenz from 'eslint-config-yenz'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...yenz,
  },
]
```

Or import individual parts directly:

```js
import { plugins, rules, languageOptions } from 'eslint-config-yenz'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins,
    languageOptions,
    rules,
  },
]
```

### Combining with Other Configs

A more realistic setup with ignore patterns, rule overrides, and additional plugins:

```js
import yenz from 'eslint-config-yenz'
// Example: adding another plugin alongside yenz (not required)
import react from 'eslint-plugin-react'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...yenz,
    // Example: merging in additional plugins
    plugins: {
      ...yenz.plugins,
      react,
    },
    // Example: extending language options
    languageOptions: {
      ...yenz.languageOptions,
      parserOptions: {
        ...yenz.languageOptions.parserOptions,
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...yenz.rules,
      // Example: relaxing the included rules for your project
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'no-magic-numbers': 'off',
    },
  },
]
```

### Selective Imports

You can import individual parts for more granular control:

```js
import { plugins, rules, languageOptions } from 'eslint-config-yenz'

export default [
  {
    files: ['**/*.ts'],
    plugins: {
      ...plugins,
    },
    // Example: pointing to a specific tsconfig
    languageOptions: {
      ...languageOptions,
      parserOptions: {
        ...languageOptions.parserOptions,
        project: './tsconfig.app.json',
      },
    },
    // Example: overriding specific rules
    rules: {
      ...rules,
      'no-console': 'off',
      'semi': ['error', 'always'],
    },
  },
]
```

### Adding Jest Support for Test Files

The config includes the Jest plugin but you need to apply it to your test files:

```js
import yenz from 'eslint-config-yenz'
import jest from 'eslint-plugin-jest'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...yenz,
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    ...yenz,
    ...jest.configs['flat/recommended'],
    rules: {
      ...yenz.rules,
      ...jest.configs['flat/recommended'].rules,
      // Example: relaxing strict rules for test files
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'no-magic-numbers': 'off',
    },
  },
]
```

## Style Guide

This config enforces the following conventions:

| Rule | Setting |
|------|---------|
| Quotes | Single |
| Semicolons | Never |
| Indentation | 2 spaces |
| Brace style | Stroustrup |
| Line endings | Unix (LF) |
| Trailing newline | Required |
| Console | Only `console.error` and `console.warn` |
| Magic numbers | Restricted (allows -1 through 10, 60 (for seconds/minutes), 100) |
| Import order | Alphabetized with groups: builtin, external, internal, parent, sibling, index |
| Import spacing | 2 blank lines after imports |

## TypeScript Rules

- Type-checked rules enabled via `@typescript-eslint/recommended-type-checked`
- Explicit function return types required
- Unsafe operations (`any` usage) produce warnings
- Unused variables are errors (prefix with `_` to ignore)
- Unnecessary conditions flagged as errors

# Release Procedure

1. Open a new branch for your work.
2. Make all changes in that branch.
3. Add code samples in `test/` that intentionally fail your new or updated config to confirm they are caught.
4. Commit and push your changes, then open a PR.
5. **Bump to a pre-release version and publish a beta:**
   ```bash
   yarn version --pre[major|minor|patch] --preid beta
   npm publish --tag beta                # or alpha, rc
   ```
   Users can test it with:
   ```bash
   yarn add eslint-config-yenz@beta   # or @alpha, @rc
   ```
6. After review, **merge your branch into `main`**.
7. Open a version bump PR against `main` and merge it in.
8. **Publish the stable release** from `main`:
   ```bash
   yarn version --[major|minor|patch]
   npm publish
   ```

> **Why `yarn version` + `npm publish`?** `yarn version` handles the version bump, git tag, and commit. We use `npm publish` for the actual publish because `yarn publish` redundantly prompts for a new version even when one was already set.
