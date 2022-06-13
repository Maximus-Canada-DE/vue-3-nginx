/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-import-assign': 'off',
    'array-element-newline': [
      'warn',
      'always',
    ],
    'array-bracket-newline': [
      'warn',
      'always',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always',
        'objects': 'always',
        'functions': 'never',
      },
    ],
    'brace-style': [
      'warn',
      '1tbs',
      { 'allowSingleLine': true, },
    ],
    'vue/first-attribute-linebreak': [
      'warn',
      {
        'singleline': 'below',
        'multiline': 'below',
      },
    ],
    'vue/require-default-prop': 'off',
    'indent': [
      'warn',
      2,
    ],
  },
  "overrides": [
    {
      "files": [
        "cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    }
  ]
}
