const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  tabWidth: 4, // Set tab width to 4 spaces
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
