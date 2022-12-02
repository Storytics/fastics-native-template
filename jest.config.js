/** @returns {Promise<import('jest').Config>} */
const config = {
  preset: "jest-expo",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|ts?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", ".*/__mocks__/.*"],
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsconfig: {
        jsx: "react",
      },
    },
  },
  setupFiles: ["<rootDir>/jest.setup.ts"],
};

module.exports = config;
