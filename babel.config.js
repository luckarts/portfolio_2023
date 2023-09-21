module.exports = function(api) {
    api.cache(true);

    const presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['>1%', 'ie 11', 'not op_mini all']
          }
        }
      ],
      '@babel/preset-react'
    ];

    const plugins = [

      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import'
    ];

    return {
      presets,
      plugins
    };
  };