module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended'
  ],
  plugins: ['cypress'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single']
  },
  overrides: [
    {
      files: ['e2e-tests/**/*.js'],
      env: {
        'cypress/globals': true
      }
    }
  ]
}
