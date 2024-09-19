/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignores: ['apps/**', 'packages/**'],
  extends: ['@repo/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
