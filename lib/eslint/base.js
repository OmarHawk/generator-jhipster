import unusedImports from 'eslint-plugin-unused-imports';
import imports from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';

/**
 * @type {import('typescript-eslint').ConfigWithExtends}
 *
 * Config applied to transformed source in generation process.
 * Rules must be compatible with auto fix to be applied.
 */
const baseConfig = {
  plugins: {
    'unused-imports': unusedImports,
    import: fixupPluginRules(imports),
  },
  rules: {
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-else-return': 'error',
    'no-regex-spaces': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: false }],
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    // Configure unused-imports rule
    'no-unused-vars': 'off',
    'import/no-duplicates': 'error',
    'import/order': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

export default baseConfig;
