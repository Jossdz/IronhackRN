module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupFiles: ['./jestSetupFile.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
};
