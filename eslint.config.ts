import pluginVue from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import prettierConfig from '@vue/eslint-config-prettier/skip-formatting';

export default [
  // Base configuration
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser, // Use @typescript-eslint/parser for <script setup lang="ts">
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Add TypeScript recommended rules manually
      ...tsPlugin.configs.recommended.rules,
      // Add your custom rules here
    },
  },

  // Vue essential rules
  ...pluginVue.configs['flat/essential'],

  // Prettier formatting (skip formatting)
  prettierConfig,
];
