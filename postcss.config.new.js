module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    ['autoprefixer', {
      flexbox: 'no-2009',
      overrideBrowserslist: [
        '> 0.3%',
        'last 2 major versions',
        'not dead',
        'Chrome >= 60',
        'Firefox >= 60',
        'Firefox ESR',
        'iOS >= 12',
        'Safari >= 12',
        'not ie <= 11'
      ]
    }],
    ['cssnano', {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }]
  ]
};
