module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single']
  },
overrides: [
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.test.jsx', '**/*.jest.spec.js', '**/*.jest.spec.jsx'],
    env: {
      jest: true
    }
  },
  {
    files: ['e2e-tests/**/*.js'],
    env: {
      'cypress/globals': true
    },
    extends: ['plugin:cypress/recommended'],
    plugins: ['cypress']
  }
]

};
