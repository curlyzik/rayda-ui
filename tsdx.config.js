//tsdx.config.js
// https://github.com/jaredpalmer/tsdx/discussions/997
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        // inject:true,
        // only write out CSS for the first bundle (avoids redundant extra files)
        extract: false,
      })
    );
    return config;
  },
};
