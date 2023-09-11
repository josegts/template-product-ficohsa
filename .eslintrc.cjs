module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'no-extra-boolean-cast': 0,
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    'react/display-name': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
