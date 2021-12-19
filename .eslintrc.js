module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", {
      endOfLine: "auto"
    }]
  },
  env: {
    node: true
  }
}