/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const reactToolboxVariables = {
  'color-primary': '#07addc',
};

// PostCSS-Loader config options
module.exports = {
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables: reactToolboxVariables,
        },
      },
    },
    'postcss-import': {},
    'postcss-modules-values': {},
  },
};
