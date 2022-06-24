/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-import-assign': 'off',
		'array-element-newline': [
			'error',
			'always',
		],
		'array-bracket-newline': [
			'error',
			'always',
		],
		quotes: [
			'error',
			'single',
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always',
				objects: 'always',
				functions: 'never',
			},
		],
		'vue/html-indent': [
			'error',
			'tab',
			{
				'attribute': 1,
				'baseIndent': 1,
				'closeBracket': 0,
				'alignAttributesVertically': true,
				'ignores': [
				],
			},
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never',
				'multiline': 'always',
			},
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true, 
			},
		],
		'vue/first-attribute-linebreak': [
			'error',
			{
				singleline: 'beside',
				multiline: 'below',
			},
		],
		'vue/multiline-html-element-content-newline': [
			'error',
			{
				'ignoreWhenEmpty': true,
				'allowEmptyLines': true,
			},
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				'ignoreWhenNoAttributes': false,
				'ignoreWhenEmpty': true,
			},
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				'singleline': {
					'max': 1,
				},      
				'multiline': {
					'max': 1,
				},
			},
		],
		'vue/require-default-prop': 'off',
		indent: [
			'error',
			'tab',
		],
		'object-property-newline': 'error',
		'object-curly-newline': [
			'error',
			'always',
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				'ignoreRestSiblings': true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'off',
	},
	overrides: [
		{
			files: [
				'cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}',
			],
			extends: [
				'plugin:cypress/recommended',
			],
		},
	],
};
