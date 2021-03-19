module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["standard", "eslint:recommended", "plugin:import/errors", "plugin:import/warnings"],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: false,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    sourceType: "module",
  },
  globals: {
    strapi: true,
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};
