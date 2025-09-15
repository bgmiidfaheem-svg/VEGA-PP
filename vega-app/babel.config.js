module.exports = function (api) {
  const isWeb = api.caller(c => c?.platform === 'web');
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      '@babel/plugin-transform-export-namespace-from',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
          },
        },
      ],
      !isWeb && 'nativewind/babel',
      'react-native-reanimated/plugin',
    ].filter(Boolean),
  };
};
