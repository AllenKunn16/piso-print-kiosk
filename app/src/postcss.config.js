// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: {
      config: './src/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
