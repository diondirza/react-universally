/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const reactToolboxVariables = {
  'color-primary': '#07addc',
};

// PostCSS-Loader config options
module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: reactToolboxVariables,
        },
      },
    }),
    require('postcss-modules-values'),
  ],
};
