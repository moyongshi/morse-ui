module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@emotion/babel-plugin',
    [
      'import',
      {
        libraryName: 'ahooks',
        libraryDirectory: 'lib',
        style: false,
        camel2DashComponentName: false,
      },
      'ahooks',
    ],
    ['import', { libraryName: 'lodash', libraryDirectory: '', style: false, camel2DashComponentName: false }, 'lodash'],
  ].filter(Boolean),
};
