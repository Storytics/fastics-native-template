module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  ignorePatterns: ["node_modules/", "build/", "app.json", ".eslintrc.js"],
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        endOfLine: "auto",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "never"],
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
  },
};
