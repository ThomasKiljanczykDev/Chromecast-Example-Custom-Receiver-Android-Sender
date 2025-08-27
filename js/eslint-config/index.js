// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';

import errors from './src/errors.js';
import style from './src/style.js';
import typescript from './src/typescript.js';

const baseEslintConfig = tseslint.config(...errors, ...style);

const tsEslintConfig = tseslint.config(
    eslint.configs.recommended,
    ...typescript,
    ...baseEslintConfig,
    eslintConfigPrettier
);

export { tsEslintConfig };
