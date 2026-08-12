module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'scripts', '*.config.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'error',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['src/main.tsx', 'src/pages/AnimatedTimeline/components/SceneQaPanel.tsx'],
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
  ],
};
