module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-trailing-spaces": "error",
    "indent": ["error", 2],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "no-console": 0,
    "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }],
    "no-multi-spaces": "error",
    "semi": ["error", "always"],
    "block-spacing": "error"
  },
};
