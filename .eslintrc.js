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
			'warn',
			'always',
		],
		'array-bracket-newline': [
			'warn',
			'always',
		],
		quotes: [
			'warn',
			'single',
		],
		'comma-dangle': [
			'warn',
			{
				arrays: 'always',
				objects: 'always',
				functions: 'never',
			},
		],
		'vue/html-indent': [
			'warn',
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
			'warn',
			{
				'singleline': 'never',
				'multiline': 'always',
			},
		],
		'brace-style': [
			'warn',
			'1tbs',
			{ allowSingleLine: true, },
		],
		'vue/first-attribute-linebreak': [
			'warn',
			{
				singleline: 'below',
				multiline: 'below',
			},
		],
		'vue/multiline-html-element-content-newline': [
			'warn',
			{
				'ignoreWhenEmpty': true,
				'allowEmptyLines': false,
			},
		],
		'vue/singleline-html-element-content-newline': [
			'warn',
			{
				'ignoreWhenNoAttributes': false,
				'ignoreWhenEmpty': true,
			},
		],
		'vue/max-attributes-per-line': [
			'warn',
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
			'warn',
			'tab',
		],
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
