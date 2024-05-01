const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  }
};

const {
  resolver: { sourceExts },
} = getDefaultConfig(__dirname);
const sassConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-sass-transformer'),
  },
  resolver: {
    sourceExts: [...sourceExts, 'scss', 'sass'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config, sassConfig);
