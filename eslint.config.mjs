import globals from 'globals';
import pluginJs from '@eslint/plugin-js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import eslintConfigCodely from 'eslint-config-codely';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintConfigCodely.ts,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
