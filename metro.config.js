const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Step 1: Get default config
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// Step 2: Define custom config for SVGs
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

// Step 3: Merge and wrap with reanimated config
const mergedConfig = mergeConfig(defaultConfig, customConfig);
const finalConfig = wrapWithReanimatedMetroConfig(mergedConfig);

module.exports = finalConfig;
// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);
// const { assetExts, sourceExts } = defaultConfig.resolver;

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
//   transformer: {
//     babelTransformerPath: require.resolve(
//       'react-native-svg-transformer/react-native',
//     ),
//   },
//   resolver: {
//     assetExts: assetExts.filter(ext => ext !== 'svg'),
//     sourceExts: [...sourceExts, 'svg'],
//   },
// };

// module.exports = mergeConfig(defaultConfig, config);
