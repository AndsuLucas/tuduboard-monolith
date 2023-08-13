/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    ignorePatterns: ['resources/js/ssr.tsx',  'resources/js/app.tsx'],
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
    
  };
