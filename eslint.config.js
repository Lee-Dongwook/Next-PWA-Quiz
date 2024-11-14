import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // 기본 권장 설정
  js.configs.recommended,

  // TypeScript 설정
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // React 설정
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+에서는 불필요
      'react/no-unknown-property': ['error', { ignore: ['css'] }], // Emotion 호환
    },
  },

  // 글로벌 객체 설정 (window, process 등)
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        window: 'readonly', // 브라우저 전역 객체
        process: 'readonly', // Node.js 전역 객체
        global: 'readonly', // Node.js global 객체
        React: 'readonly', // React 객체
        HTMLDivElement: 'readonly', // HTMLDivElement
        HTMLInputElement: 'readonly', // HTMLInputElement
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
    },
  },
];
