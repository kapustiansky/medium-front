import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier/flat';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const eslintConfig = defineConfig([
	globalIgnores([
		'**/.*',
		'**/*.config.*',
		'**/{.next,node_modules,public}/**',
		'**/{package,tsconfig}.json',
		'next-env.d.ts',
	]),
	...nextVitals,
	...nextTs,
	prettierConfig,
	{
		plugins: {
			unicorn: eslintPluginUnicorn,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			...eslintPluginUnicorn.configs.recommended.rules,
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': 'error',
			curly: ['error', 'multi', 'consistent'],
			'no-console': ['error', { allow: ['error'] }],
			'react/no-danger': 'warn',
			'react-hooks/exhaustive-deps': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
				},
			],
			'unicorn/catch-error-name': [
				'error',
				{
					ignore: [String.raw`^err\d*$`, /^ignore/i],
				},
			],
			'unicorn/no-null': 'off',
			'unicorn/numeric-separators-style': [
				'error',
				{
					onlyIfContainsSeparator: true,
				},
			],
			'unicorn/consistent-function-scoping': 'warn',
		},
	},
	{
		files: ['src/pages/**'],
		rules: {
			'unicorn/filename-case': 'off',
		},
	},
]);

export default eslintConfig;
