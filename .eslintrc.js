module.exports = {
  extends: ['@callstack'],
  rules: {
    'react-native/no-raw-text': 'off',
    'react/require-default-props': 'off',
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: true, ignoreStyleProperties: true },
    ],
  },
};
