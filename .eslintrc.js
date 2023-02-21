module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 8,
    "sourceType": "module",
  },
  extends: ['airbnb', 'prettier', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  plugins: ['react', 'react-hooks', 'import', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    "react/react-in-jsx-scope": "off",
    "no-console": "off",
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx', '.jsx'] },
    ],
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'import/extensions': [
      'off',
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '[@]/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 'off',
    "no-unused-vars": "warn",
    "react/no-array-index-key": "off",
    "no-empty-pattern": "off",
    "react/jsx-props-no-spreading": "off",
    "no-undef": "warn",
    "no-nested-ternary": "off",
    "react/require-default-props": "off",
    "no-shadow": "off",
  },
};
