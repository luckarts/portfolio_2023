// Important modules this config uses
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const OfflinePlugin = require('offline-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'production',

  // In production, we skip all hot-reloading stuff
  entry: [require.resolve('react-app-polyfill/ie11'), path.join(process.cwd(), 'app/app.js')],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        },
        parallel: true
        // cache: true,
        // sourceMap: true,
      })
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/images', to: 'images' },
        { from: 'public/img', to: 'img' },
        { from: 'public/upload', to: 'upload' },
        { from: 'public/sitemap.xml', to: 'sitemap.xml' },
        { from: 'public/robots.txt', to: 'robots.txt' },
        { from: 'public/favicon.ico', to: 'favicon.ico' },
        { from: 'public/locales', to: 'locales' }
      ]
    }),
    new WebpackPwaManifest({
      name: 'Bachelart',
      short_name: 'Bachelart',
      description: 'Bachelart Portfolio!',
      background_color: '#fafafa',
      theme_color: '#b1624d',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('app/assets/images/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 192, 384, 512]
        },
        {
          src: path.resolve('app/assets/images/icons/icon-512x512.png'),
          sizes: [120, 152, 167, 180],
          ios: true
        }
      ]
    }),

    new webpack.ids.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    })
  ],

  performance: {
    assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)
  }
});
