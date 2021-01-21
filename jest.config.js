module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
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
