module.exports = {
  extends: ['@callstack'],
  plugins: ['simple-import-sort'],
  rules: {
    'react-native/no-raw-text': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'react/require-default-props': 'off',
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: true, ignoreStyleProperties: true },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Side effect imports.
          ['^\\u0000'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    'react-native-a11y/has-accessibility-hint': 0,
    'react-native-a11y/has-valid-accessibility-descriptors': 0,
  },
};
