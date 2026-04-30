import path from 'node:path';

const buildEslintCommand = (filenames) =>
	`eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

export default {
	'**/*.{ts,tsx}': () => 'npx tsc --noEmit',
	'**/*.{js,jsx,ts,tsx,css,scss,sass,json,md}': 'prettier --write',
	'**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
