module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.vue'], // Your TypeScript files extension

        // As mentioned in the comments, you should extend TypeScript plugins here,
        // instead of extending them outside the `overrides`.
        // If you don't want to extend any rules, you don't need an `extends` attribute.
        extends: [
          'airbnb-typescript/base',
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
          'prettier/@typescript-eslint',
        ],

        parserOptions: {
          project: ['./tsconfig.json'], // Specify it only for TypeScript files
        },
      },
    ],
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:vue-a11y/recommended',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['@typescript-eslint', 'vue-a11y', 'prettier', 'vue'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5', printWidth: 100 }],
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     ts: 'never',
    //   },
    // ],
    'no-console': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/component-name-in-template-casing': [1, 'kebab-case'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/core-modules': [
      '@nuxt/config',
      '@nuxt/vue-app',
      '@nuxt/types',
      'purgecss-webpack-plugin',
      'vue',
      'vuex',
      'vue-meta',
      'vue-server-renderer',
      'vue-router',
    ],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.json', '.ts', '.vue'],
            alias: {
              '~': __dirname + '/app',
              '@': __dirname + '/app',
            },
          },
        },
      },
    },
  },
};
