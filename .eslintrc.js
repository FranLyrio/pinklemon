module.exports = {
  root: true,
  extends: [require.resolve('@sprout/configs/eslint-preset.js')],
  ignorePatterns: [
    '**/dist/**',
    '**/.next/**',
    '**/node_modules/**',
    '**/storybook-static/**',
    'apps/playground/**',
  ],
};
