module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: "latest",
  },
  extends: ["prettier"],
  plugins: [],
  // add your custom rules here
  rules: {
    camelcase: "off",
    "no-console": "off",
    "import/no-named-as-default": 0,
    "no-extra-boolean-cast": 0,
  },
};
